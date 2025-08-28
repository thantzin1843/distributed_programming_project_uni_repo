import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ChipInput from "../components/ChipInput"; // Assuming these components are styled
import FileUpload from "../components/FileUpload"; // Assuming these components are styled

export default function NewProjectForm() {
  const [tags, setTags] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [sourceFiles, setSourceFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [universityYear, setUniversityYear] = useState("");
  const [teamMembers, setTeamMembers] = useState([{ id: "", role: "" }]);

  const navigate = useNavigate();

  // Sample data (consider fetching this from an API in a real app)
  const subjects = ["AI & ML", "Web Development", "Data Science", "IoT"];
  const students = [
    { id: "s1", name: "Alice" },
    { id: "s2", name: "Bob" },
    { id: "s3", name: "Charlie" },
    { id: "s4", name: "Diana" },
  ];

  const handleAddMember = () => setTeamMembers([...teamMembers, { id: "", role: "" }]);
  const handleRemoveMember = (index) => {
    const updated = [...teamMembers];
    updated.splice(index, 1);
    setTeamMembers(updated);
  };
  const handleMemberChange = (index, field, value) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("short_description", e.target.shortDescription.value);
    formData.append("long_description", e.target.longDescription.value);
    formData.append("university", "University of Information Technology");
    formData.append("university_year", universityYear);
    formData.append("subject", selectedSubject);
    formData.append("tags", JSON.stringify(tags));
    formData.append("technologies", JSON.stringify(technologies));
    formData.append("team_members", JSON.stringify(teamMembers));
    formData.append("github_link", e.target.githubLink.value);
    formData.append("website_link", e.target.websiteLink.value);

    if (thumbnail) formData.append("thumbnail", thumbnail);
    sourceFiles.forEach((sf) => formData.append("source_files", sf));

    try {
      const response = await fetch("http://localhost:8080/projects/", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log("Created Project:", data);
      navigate("/projects", { state: { success: "✅ Project submitted successfully!" } });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to submit project. Please check your inputs.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full border-2 border-gray-200 rounded-xl p-3 focus:outline-none focus:border-blue-500 transition-colors";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";
  const sectionTitleClass = "text-xl font-bold text-gray-800 mb-4";

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-gray-50 p-6 md:p-10 rounded-3xl shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">Upload a New Project</h1>
      <p className="text-center text-gray-500 mb-8">Fill out the details below to showcase your amazing work.</p>

      {/* Basic Project Info */}
      <section className="space-y-6">
        <h2 className={sectionTitleClass}>Project Details</h2>
        <div>
          <label htmlFor="title" className={labelClass}>Project Title</label>
          <input id="title" name="title" type="text" required className={inputClass} placeholder="e.g., AI-Powered Chatbot for Student Services" />
        </div>
        <div>
          <label htmlFor="shortDescription" className={labelClass}>Short Description</label>
          <input
            id="shortDescription"
            name="shortDescription"
            type="text"
            placeholder="A brief, one-line summary"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="longDescription" className={labelClass}>Detailed Description</label>
          <textarea
            id="longDescription"
            name="longDescription"
            rows="6"
            placeholder="Describe your project, its features, and purpose in detail."
            required
            className={inputClass}
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="universityYear" className={labelClass}>University Year</label>
            <input
              id="universityYear"
              type="text"
              value={universityYear}
              onChange={(e) => setUniversityYear(e.target.value)}
              placeholder="e.g., 2025"
              className={inputClass}
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className={labelClass}>Subject / Field</label>
            <select
              id="subject"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className={inputClass}
              required
            >
              <option value="">Select or type a subject...</option>
              {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </section>
      
      {/* Team Members */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className={sectionTitleClass}>Team Members</h2>
          <button type="button" onClick={handleAddMember} className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium hover:bg-blue-200 transition-colors">
            <FaPlus size={12} /> Add Member
          </button>
        </div>
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <select
                value={member.id}
                onChange={(e) => handleMemberChange(index, "id", e.target.value)}
                className={inputClass}
                required
              >
                <option value="">Select student</option>
                {students.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Role (e.g., Developer)"
                value={member.role}
                onChange={(e) => handleMemberChange(index, "role", e.target.value)}
                className={inputClass}
                required
              />
            </div>
            {teamMembers.length > 1 && (
              <button type="button" onClick={() => handleRemoveMember(index)} className="text-red-500 hover:text-red-700 transition-colors self-start md:self-auto">
                <FaTimes size={20} />
              </button>
            )}
          </div>
        ))}
      </section>

      {/* Tags & Technologies */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ChipInput label="Tags" placeholder="e.g., Chatbot, UX, Automation" values={tags} setValues={setTags} />
        <ChipInput label="Technologies" placeholder="e.g., React, Python, MongoDB" values={technologies} setValues={setTechnologies} />
      </section>

      {/* File Uploads */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FileUpload label="Project Thumbnail" previewType="image" onChange={setThumbnail} />
        <FileUpload label="Source Files" multiple onChange={setSourceFiles} previewType="files" />
      </section>

      {/* Project Links */}
      <section>
        <h2 className={sectionTitleClass}>Project Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaGithub /></span>
            <input id="githubLink" name="githubLink" type="url" placeholder="GitHub Repository Link" className={`${inputClass} pl-10`} />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><FaExternalLinkAlt /></span>
            <input id="websiteLink" name="websiteLink" type="url" placeholder="Live Demo/Website Link" className={`${inputClass} pl-10`} />
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <div className="flex flex-col items-center space-y-4">
        <button 
          type="submit" 
          disabled={loading}
          className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit Project"}
        </button>
        {message && <p className={`text-sm font-semibold ${message.startsWith("❌") ? "text-red-600" : "text-green-600"}`}>{message}</p>}
      </div>
    </form>
  );
}