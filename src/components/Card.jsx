import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference, onDelete }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      {/* Delete Button */}
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-red-400 hover:text-red-600 text-lg z-10"
      >
        <IoIosClose />
      </button>

      <FaRegFileAlt className="text-xl" />

      <p className="text-sm mt-5 font-semibold leading-[1.25]">
        {data.description}
      </p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoIosClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue"
                ? "bg-blue-600"
                : data.tag.tagColor === "red"
                ? "bg-red-600"
                : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
