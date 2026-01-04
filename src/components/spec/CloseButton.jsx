// import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const CloseButton = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setVisible(false);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* <AnimatePresence>
        {visible && (
          <motion.button
            key="cross"
            onClick={handleClick}
            className="p-3 bg-red-500 text-white rounded-full shadow-lg"
            initial={{ x: 0, opacity: 1, rotate: 0 }}
            exit={{
              x: -100, // move left
              opacity: 0, // vanish
              rotate: -90, // rotate counter-clockwise
              transition: { duration: 0.5 },
            }}
            whileHover={{ scale: 1.1 }}
          > */}
            <RxCross2 className="w-6 h-6" />
          {/* </motion.button>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default CloseButton;
