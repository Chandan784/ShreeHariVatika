"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/app/firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [editedInventory, setEditedInventory] = useState([]);

  const inventoryRef = collection(db, "inventory"); // Firestore collection for inventory

  // Fetch inventory data from Firestore
  const fetchInventory = async () => {
    const data = await getDocs(inventoryRef);
    const inventoryData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      totalBeds: doc.data().totalBeds || "0", // Default to "0" if missing
      totalRooms: doc.data().totalRooms || "0", // Default to "0" if missing
      totalMattress: doc.data().totalMattress || "0", // Default to "0" if missing
    }));
    setInventory(inventoryData);
    setEditedInventory(inventoryData); // Initialize editedInventory
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  // Handle change in editable fields
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedInventory = editedInventory.map((item) =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setEditedInventory(updatedInventory);
  };

  // Save updated inventory to Firestore
  const handleSave = async () => {
    for (const item of editedInventory) {
      const docRef = doc(db, "inventory", item.id);
      await updateDoc(docRef, {
        totalBeds: item.totalBeds, // Save as string
        totalRooms: item.totalRooms, // Save as string
        totalMattress: item.totalMattress, // Save as string
      });
    }
    setIsEditing(false); // Exit edit mode
    fetchInventory(); // Refresh inventory data
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Inventory Management</h1>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="grid grid-cols-3 gap-4 font-semibold border-b pb-3">
          <p>Total Beds</p>
          <p>Total Rooms</p>
          <p>Total Mattresses</p>
        </div>
        {editedInventory.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 gap-4 items-center py-3 border-b"
          >
            {isEditing ? (
              <>
                <input
                  type="text" // Use "text" to align with Firestore's string format
                  name="totalBeds"
                  value={item.totalBeds}
                  onChange={(e) => handleChange(e, item.id)}
                  className="border border-gray-300 rounded-lg p-2"
                />
                <input
                  type="text" // Use "text" to align with Firestore's string format
                  name="totalRooms"
                  value={item.totalRooms}
                  onChange={(e) => handleChange(e, item.id)}
                  className="border border-gray-300 rounded-lg p-2"
                />
                <input
                  type="text" // Use "text" to align with Firestore's string format
                  name="totalMattress"
                  value={item.totalMattress}
                  onChange={(e) => handleChange(e, item.id)}
                  className="border border-gray-300 rounded-lg p-2"
                />
              </>
            ) : (
              <>
                <p>{item.totalBeds}</p>
                <p>{item.totalRooms}</p>
                <p>{item.totalMattress}</p>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6 space-x-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Edit Inventory
          </button>
        )}
      </div>
    </div>
  );
};

export default Inventory;
