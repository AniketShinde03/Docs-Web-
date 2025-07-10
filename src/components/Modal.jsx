// Modal.jsx
import React, { useState } from 'react';

function Modal({ setData, closeModal }) {
  const [form, setForm] = useState({
    description: '',
    filesize: '',
    tagTitle: '',
    tagColor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      id: crypto.randomUUID(),
      description: form.description,
      filesize: form.filesize,
      close: true,
      tag: {
        isOpen: true,
        tagTitle: form.tagTitle,
        tagColor: form.tagColor
      }
    };

    setData(prev => [...prev, newCard]);
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 text-white rounded-xl shadow-xl p-6 w-full max-w-md space-y-4"
    >
      <h2 className="text-xl font-bold">Add New Card</h2>

      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none"
      />
      <input
        name="filesize"
        value={form.filesize}
        onChange={handleChange}
        placeholder="File Size"
        className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none"
      />
      <input
        name="tagTitle"
        value={form.tagTitle}
        onChange={handleChange}
        placeholder="Tag Title"
        className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none"
      />
      <input
        name="tagColor"
        value={form.tagColor}
        onChange={handleChange}
        placeholder="Tag Color (e.g. red, green, blue)"
        className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none"
      />

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={closeModal}
          className="bg-zinc-600 text-white px-4 py-2 rounded hover:bg-zinc-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-500"
        >
          Add Card
        </button>
      </div>
    </form>
  );
}

export default Modal;
