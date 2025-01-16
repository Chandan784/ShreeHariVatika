"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/app/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Sidebar from "@/app/components/Sidebar";

const Cottage = () => {
  const [cottages, setCottages] = useState([]);
  const [newCottage, setNewCottage] = useState({
    title: "",
    description: "",
    price: "",
    beds: "",
    persons: "",
    facilities: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentCottageId, setCurrentCottageId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const cottagesRef = collection(db, "cottages");

  // Fetch cottages from Firestore
  const fetchCottages = async () => {
    const data = await getDocs(cottagesRef);
    setCottages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchCottages();
  }, []);

  // Handle create and edit
  const handleSave = async () => {
    if (isEditing) {
      await updateDoc(doc(db, "cottages", currentCottageId), newCottage);
      setIsEditing(false);
      setCurrentCottageId(null);
    } else {
      await addDoc(cottagesRef, newCottage);
    }
    fetchCottages();
    resetForm();
    setIsModalOpen(false); // Close modal after saving
  };

  // Handle form input change
  const handleChange = (e) => {
    setNewCottage({ ...newCottage, [e.target.name]: e.target.value });
  };

  // Reset the form state
  const resetForm = () => {
    setNewCottage({
      title: "",
      description: "",
      price: "",
      beds: "",
      persons: "",
      facilities: "",
    });
  };

  // Open modal for editing
  const handleEdit = (cottage) => {
    setNewCottage(cottage);
    setIsEditing(true);
    setCurrentCottageId(cottage.id);
    setIsModalOpen(true); // Open modal when editing
  };

  // Handle delete cottage
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "cottages", id));
    fetchCottages();
  };

  return (
    <div className="flex">
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold">Cottages</h1>

        {/* Cottages List */}
        <div className="mt-6">
          <button
            onClick={() => {
              setIsEditing(false);
              resetForm();
              setIsModalOpen(true); // Open modal for creating
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-6"
          >
            Create Cottage
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cottages.map((cottage) => (
              <div
                key={cottage.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold">{cottage.title}</h3>
                <p>{cottage.description}</p>
                <p className="mt-2 font-semibold">Price: {cottage.price}</p>
                <p className="mt-2 font-semibold">Beds: {cottage.beds}</p>
                <p className="mt-2 font-semibold">Persons: {cottage.persons}</p>
                <p className="mt-2 text-sm text-gray-600">
                  Facilities: {cottage.facilities}
                </p>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(cottage)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cottage.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Form for Creating/Editing Cottage */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10">
            <div className="flex justify-center items-center h-full">
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-2xl font-semibold mb-4">
                  {isEditing ? "Edit Cottage" : "Create Cottage"}
                </h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newCottage.title}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={newCottage.price}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                  <input
                    type="text"
                    name="beds"
                    placeholder="Beds"
                    value={newCottage.beds}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                  <input
                    type="text"
                    name="persons"
                    placeholder="Persons"
                    value={newCottage.persons}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                  <textarea
                    name="facilities"
                    placeholder="Facilities"
                    value={newCottage.facilities}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={handleSave}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)} // Close modal on Cancel
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cottage;
