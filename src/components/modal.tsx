// Modal.tsx
import { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  const modalClass = isOpen ? "fixed inset-0 overflow-y-auto" : "hidden";
  return (
    <div className={modalClass}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-4 bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
