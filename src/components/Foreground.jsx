// Foreground.jsx
import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import Modal from "./Modal";

function Foreground() {
  const ref = useRef(null);
  const [ModalOpen, setOpenModal] = useState(false);
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem("card-data");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("card-data", JSON.stringify(data));
  }, [data]);

  const handleDelete = (id) => {
    setData(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-4 bg-zinc-900"
    >
      {data.map((item) => (
        <Card
          key={item.id}
          data={item}
          reference={ref}
          onDelete={() => handleDelete(item.id)}
        />
      ))}

      <button
        className="absolute text-2xl bottom-0 right-0 m-3 text-white font-semibold bg-amber-600 rounded-full p-2 shadow-lg hover:bg-amber-700"
        onClick={() => setOpenModal(prev => !prev)}
      >
        {ModalOpen ? "Close" : "Create"}
      </button>

      {ModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[4]">
          <Modal setData={setData} closeModal={() => setOpenModal(false)} />
        </div>
      )}
    </div>
  );
}

export default Foreground;
