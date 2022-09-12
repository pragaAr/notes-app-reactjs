import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import HomePages from "../pages/HomePages";
import ArchivePages from "../pages/ArchivePages";
import AddNotes from "../pages/AddNotes";
import DetailPages from "../pages/DetailPages";

function NotesApp() {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/archives" element={<ArchivePages />} />
          <Route path="/add" element={<AddNotes />} />
          <Route path="/detail/:id" element={<DetailPages />} />
        </Routes>
      </main>
    </div>
  );
}

export default NotesApp;
