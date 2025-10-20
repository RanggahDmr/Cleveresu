"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface SkillFormProps {
  skills: string[];
  setSkills: (data: string[]) => void;
}

export default function SkillForm({ skills, setSkills }: SkillFormProps) {
  const [newSkill, setNewSkill] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< Updated upstream
    if (!newSkill.trim()) return;
    setSkills([...skills, newSkill]);
    setNewSkill("");
=======
    if (!newSkill.name || !newSkill.desc) return;
    setSaving(true);
    try {
      const payload = {
        ...newSkill,
        name: newSkill.name.trim(),
        desc: newSkill.desc.trim(),
        type: newSkill.type.trim(),
      };
        const res = await api.post("/skill", payload);
      const newData = res.data.data;

      if (newData && newData.id) {
        setSkills((prev) => [...prev, newData]);
      } else {
        // fallback kalau backend gak return data skill lengkap
        const refreshed = await api.get("/skill");
        setSkills(refreshed.data.data || []);
      }

      setNewSkill({ name: "", desc: "", type: "technical" });
      showSuccess("Saved");


      setNewSkill({ name: "", desc: "", type: "technical" });
       showSuccess("Saved");
    } catch (err) {
      console.error("Error adding skill:", err);
    } finally {
      setSaving(false);
    }
>>>>>>> Stashed changes
  };

  const handleDelete = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <section className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
      {/* Judul */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
      </div>

      {/* Daftar skills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-blue-50 text-blue-800 px-3 py-1.5 rounded-full border border-blue-200 shadow-sm hover:bg-blue-100 transition"
            >
              <span className="text-sm font-medium">{skill}</span>
              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="hover:text-red-500 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No skills added yet</p>
        )}
      </div>

      {/* Input tambah skill */}
      <form
        onSubmit={handleAdd}
        className="flex flex-col md:flex-row gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200"
      >
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a new skill..."
          className="border rounded-md px-3 py-2 flex-1 text-gray-900 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-1 bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 shadow-sm transition"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </form>
<<<<<<< Updated upstream
=======

      {/*  List skills */}
      <ul className="space-y-3">
        {skills.length === 0 && (
          <p className="text-gray-500 text-sm italic">No skills yet.</p>
        )}
        {skills.map((skill, index) => (
          <li
            key={skill.id || `temp-${index}`} //re-render
            className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-start"
          >
            <div className="flex-1">
              <input
                value={skill.name}
                onChange={(e) => handleUpdate(skill.id!, "name", e.target.value)}
                className="font-semibold text-gray-800 bg-transparent border-none focus:ring-0 focus:outline-none w-full"
              />
              <select
                value={skill.type}
                onChange={(e) => handleUpdate(skill.id!, "type", e.target.value)}
                className="text-xs text-gray-500 capitalize bg-transparent border-none focus:ring-0 focus:outline-none mt-1"
              >
                <option value="technical">technical</option>
                <option value="softskill">softskill</option>
              </select>
              <textarea
                value={skill.desc}
                onChange={(e) => handleUpdate(skill.id!, "desc", e.target.value)}
                placeholder="Description"
                className="mt-2 w-full text-sm text-gray-700 bg-transparent border-none focus:ring-0 focus:outline-none resize-none"
                rows={2}
              />
            </div>
            <button
              onClick={() => handleDelete(skill.id)}
              className="text-red-600 hover:text-red-800 flex items-center gap-1 ml-3"
            >
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </li>
        ))}
      </ul>
>>>>>>> Stashed changes
    </section>
  );
}
