"use client";

<<<<<<< Updated upstream
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
=======
import { useEffect, useState } from "react";
import { Plus, Trash2, Loader2, Upload } from "lucide-react";
import api from "@/lib/axios";
import toast from "react-hot-toast";
import { showSuccess } from "@/lib/toastHelper";


function formatDate(isoString: string): string {
  const date = new Date(isoString);

  // Pastikan tanggal valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}


type Experience = {
  id?: string;
  place: string;
  position: string;
  start_at: string;
  end_at?: string;
  desc?: string;
  certificate?: string | null;
};
>>>>>>> Stashed changes

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState([
    { company: "PT Dumbways Indonesia", position: "Frontend Developer", years: "2023 - 2024" },
  ]);

  const [newExp, setNewExp] = useState({ company: "", position: "", years: "" });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExp.company || !newExp.position || !newExp.years) return;
    setExperiences([...experiences, newExp]);
    setNewExp({ company: "", position: "", years: "" });
  };

  const handleDelete = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-800">Experience</h2>
      </div>

      <form
        onSubmit={handleAdd}
        className="flex flex-col md:flex-row gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6"
      >
        <input
<<<<<<< Updated upstream
          placeholder="Company"
          value={newExp.company}
          onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
          className="border rounded-md px-3 py-2 flex-1 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
=======
          placeholder="Company / Place"
          value={newExp.place}
          onChange={(e) => setNewExp({ ...newExp, place: e.target.value })}
          className="border rounded-md px-3 py-2 flex-1 min-w-[100px] text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
>>>>>>> Stashed changes
        />
        <input
          placeholder="Position"
          value={newExp.position}
          onChange={(e) => setNewExp({ ...newExp, position: e.target.value })}
          className="border rounded-md px-3 py-2 flex-1 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          placeholder="Years"
          value={newExp.years}
          onChange={(e) => setNewExp({ ...newExp, years: e.target.value })}
          className="border rounded-md px-3 py-2 flex-1 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </form>

<<<<<<< Updated upstream
      <ul className="space-y-3">
        {experiences.map((exp, index) => (
=======
      {/* List Experience */}
      <ul className="space-y-3 ">
        {experiences.length === 0 && (
          <p className="text-gray-500 text-sm italic">No experiences yet.</p>
        )}
        {experiences.map((exp, i) => (
>>>>>>> Stashed changes
          <li
            key={index}
            className="p-4 bg-white rounded-lg shadow border border-gray-100 flex justify-between items-center"
          >
<<<<<<< Updated upstream
            <div>
              <p className="font-semibold text-gray-800">{exp.company}</p>
              <p className="text-sm text-gray-600">{exp.position}</p>
              <p className="text-xs text-gray-500">{exp.years}</p>
=======
            <div className="flex-1">
              <input
                value={exp.place}
                onChange={(e) => handleUpdate(exp.id!, "place", e.target.value)}
                className="font-semibold text-gray-800 bg-transparent border-none focus:ring-0 focus:outline-none w-full"
              />
              <input
                value={exp.position}
                onChange={(e) => handleUpdate(exp.id!, "position", e.target.value)}
                className="text-sm text-gray-600 bg-transparent border-none focus:ring-0 focus:outline-none w-full "
              />
              <p className="text-xs text-gray-500 mb-1">
                {formatForInput(exp.start_at)} - {formatForInput(exp.end_at)}
              </p>
              <textarea
                value={exp.desc || ""}
                onChange={(e) => handleUpdate(exp.id!, "desc", e.target.value)}
                placeholder="Description"
                className="w-full text-sm text-gray-700 bg-transparent editable-field focus:ring-0 focus:outline-none resize-none"
                rows={2}
              />

              {/*  Certificate */}
              <div className="mt-2">
                {exp.certificate &&
                  exp.certificate !== "null" &&
                  exp.certificate.trim() !== "" &&
                  !exp.certificate.endsWith("/uploads/") && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      className="text-blue-600 text-sm hover:underline break-words"
                    >
                      - {exp.certificate.split("/").pop()}
                    </a>
                  )}
                <label className="flex items-center gap-2 text-sm text-blue-600 cursor-pointer mt-1">
                  <Upload className="w-4 h-4" />
                  {exp.certificate && exp.certificate !== "null"
                    ? "Replace Certificate"
                    : "Upload Certificate"}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="hidden"
                    onChange={(e) =>
                      handleUploadCertificate(exp.id!, e.target.files?.[0])
                    }
                  />
                </label>
              </div>
>>>>>>> Stashed changes
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-600 hover:text-red-800 flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
