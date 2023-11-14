import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Anda dapat membuat komponen Navbar terpisah
import Profile from "../src/assets/profile.jpg";
import Footer from "./Footer";

const Profile1 = () => {
  const initialUserData = {
    name: "Rayhan",
    title: "Web Developer",
    about: "Saya seorang pengembang aplikasi.",
    email: "john@example.com",
    phone: "082113456789",
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({ ...userData });

  // Mengambil data dari localStorage saat komponen dimuat
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserData({ ...editedUserData });
    setIsEditing(false);

    // Menyimpan data ke localStorage saat tombol "Save" ditekan
    localStorage.setItem("userData", JSON.stringify(editedUserData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({
      ...editedUserData,
      [name]: value,
    });
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24">
        <div className="bg-gray-700 bg-opacity-40 py-16 px-4 rounded-xl shadow-lg">
          <div className="text-center">
            <img src={Profile} alt="profile" width={150} className="mx-auto rounded-full my-4" />
            <h1 className="text-2xl font-bold text-slate-300">
              {isEditing ? <input type="text" name="name" value={editedUserData.name} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:outline-none" /> : userData.name}
            </h1>
            <p className="text-slate-300">{isEditing ? <input type="text" name="title" value={editedUserData.title} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:outline-none" /> : userData.title}</p>
          </div>
          <div className="mt-8 ">
            <h2 className="text-lg font-semibold text-slate-300">About Me</h2>
            <p className="text-slate-300">{isEditing ? <textarea name="about" value={editedUserData.about} onChange={handleChange} className="w-full border-2 border-gray-400 focus:outline-none p-2" /> : userData.about}</p>
          </div>
          <div className="mt-8 ">
            <h2 className="text-lg text-slate-300 font-semibold">Contact</h2>
            <ul className="text-slate-300">
              <li>Email: {isEditing ? <input type="text" name="email" value={editedUserData.email} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:outline-none" /> : userData.email}</li>
              <li>Phone: {isEditing ? <input type="text" name="phone" value={editedUserData.phone} onChange={handleChange} className="w-full border-b-2 border-gray-400 focus:outline-none" /> : userData.phone}</li>
            </ul>
          </div>
          {isEditing ? (
            <div className="mt-4 ">
              <button onClick={handleSave} className="bg-orange-500 bg-opacity-60 text-slate-300 px-4 py-2 rounded hover:bg-orange-600">
                Save
              </button>
            </div>
          ) : (
            <div className="mt-4">
              <button onClick={handleEdit} className="bg-orange-500 bg-opacity-60 text-slate-300 px-4 py-2 rounded hover:bg-orange-600">
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Profile1;
