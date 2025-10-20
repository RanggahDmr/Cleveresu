"use client";
import { useCvData } from "@/redux/hooks";
import { useMemo } from "react";

export default function LivePreview() {
  const { profile, experiences, educations, skills } = useCvData();

  const htmlString = useMemo(() => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      <style>
        * { font-family: 'Times New Roman', Times, serif; }
        body { display:flex; justify-content:center; align-items:center; height:100vh; margin:0; }
      </style>
    </head>
    <body>
      <div class="flex flex-col p-4 bg-white w-[372px] h-[526px] overflow-y-auto">
        <span class="font-bold text-center text-[9px]">${profile.full_name || ""}</span>
        <span class="text-center text-[7.5px] leading-tight">${profile.address || ""} | ${profile.email || ""}</span>
        <span class="text-center text-[7.5px] mt-1">${profile.desc || ""}</span>

        <span class="pt-2 font-bold border-b text-[8.5px]">Experience</span>
        ${experiences.map(e => `
          <div class="pt-1">
            <span class="font-semibold text-[7.5px]">${e.position}</span>
            <span class="text-[7px]"> | ${e.place}</span>
            <div class="text-[6.5px] text-gray-500">${e.start_at?.split("T")[0]} - ${e.end_at?.split("T")[0]}</div>
            <p class="text-[7px]">${e.desc || ""}</p>
          </div>
        `).join("")}

        <span class="pt-2 font-bold border-b text-[8.5px]">Education</span>
        ${educations.map(e => `
          <div class="pt-1">
            <span class="font-semibold text-[7.5px]">${e.place}</span>
            <span class="text-[7px]"> (${e.start_at?.split("T")[0]} - ${e.end_at?.split("T")[0]})</span>
            <p class="text-[7px]">${e.desc || ""}</p>
          </div>
        `).join("")}

        <span class="pt-2 font-bold border-b text-[8.5px]">Skills</span>
        <ul class="pl-2 text-[7.5px]">
          ${skills.map(s => `<li>• ${s.name}</li>`).join("")}
        </ul>
      </div>
    </body>
    </html>`;
  }, [profile, experiences, educations, skills]);

  return (
    <div className="flex justify-center items-center bg-amber-50">
      <iframe
        srcDoc={htmlString}
        className="shadow-xl border w-[373px] h-[527px] scale-150"
      />
    </div>
  );
}
