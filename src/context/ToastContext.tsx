import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Info } from "lucide-react";

interface ToastOptions {
  message: string;
  title?: string;
  actionText?: string;
  actionUrl?: string;
  duration?: number;
}

interface Toast extends ToastOptions {
  id: string;
}

interface ToastContextType {
  showToast: (options: ToastOptions) => void;
  showWhatsAppAdvisorToast: (featureName: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    ({
      message,
      title = "Notice",
      actionText,
      actionUrl,
      duration = 8000,
    }: ToastOptions) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [
        ...prev,
        { id, message, title, actionText, actionUrl, duration },
      ]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    },
    [],
  );

  const showWhatsAppAdvisorToast = useCallback(
    (featureName: string) => {
      const defaultMsg = `The ${featureName} is currently offline for system upgrades. Please connect with our direct WhatsApp Chat Advisor for immediate assistance!`;
      const messageText = `Hi Arka infra & interiors team! I am inquiring about ${featureName} and would like to get a direct briefing/consultation.`;
      const waUrl = `https://wa.me/919154966677?text=${encodeURIComponent(messageText)}`;

      showToast({
        title: "Consolidated Consultation",
        message: defaultMsg,
        actionText: "Chat with Advisor",
        actionUrl: waUrl,
        duration: 10000,
      });
    },
    [showToast],
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, showWhatsAppAdvisorToast }}>
      {children}

      {/* Toast Portal Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full px-4 sm:px-0 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="pointer-events-auto w-full bg-slate-900/95 border border-white/10 hover:border-brand-orange/30 rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden group flex flex-col gap-3.5"
            >
              {/* Top ambient progress loader info */}
              <div className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-brand-orange to-brand-blue w-full opacity-60" />

              <div className="flex items-start gap-4">
                {/* Visual Icon Badge */}
                <div className="p-2.5 rounded-xl bg-brand-orange/15 text-brand-orange h-fit shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0 pr-4">
                  <span className="font-montserrat text-xs tracking-wider font-extrabold text-white block">
                    {toast.title}
                  </span>
                  <p className="font-urbanist text-xs text-gray-400 mt-1 leading-relaxed">
                    {toast.message}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => removeToast(toast.id)}
                  className="p-1 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all text-sm focus:outline-none shrink-0"
                  aria-label="Close notification"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamic Action Button linking directly to WhatsApp */}
              {toast.actionText && toast.actionUrl && (
                <div className="flex gap-2.5 pl-[48px]">
                  <a
                    href={toast.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => removeToast(toast.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-[11px] uppercase font-montserrat font-bold bg-[#ff6b00] hover:bg-orange-600 text-white rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(255,107,0,0.45)] transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{toast.actionText}</span>
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
