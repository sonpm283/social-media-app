import { ChildrenProp } from "@/types";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ModalContextType {
  isShowing: boolean;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
  content: ReactNode | null;
  setContent: React.Dispatch<React.SetStateAction<ReactNode | null>>;
  openPopup: (content: ReactNode) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: ChildrenProp) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShowing]);

  const openPopup = (modalContent: ReactNode) => {
    setIsShowing(true);
    setContent(modalContent);
  };

  const contextValue: ModalContextType = {
    isShowing,
    setIsShowing,
    content,
    setContent,
    openPopup,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {isShowing && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 flex items-center justify-center bg-slate-600/60"
            onClick={() => setIsShowing(false)}
          >
            {content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export function useModalContext(): ModalContextType {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
}

export default ModalProvider;
