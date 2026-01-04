import "../styles/sidebar.css";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function Sidebar({ isOpen, onClose, side = "left", children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`sidebar ${side} ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>
          <IoClose className="close-icon" />
        </button>
        {children}
      </div>
    </>
  );
}
