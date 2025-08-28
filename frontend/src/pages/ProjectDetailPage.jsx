import React, { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaAngleDoubleRight, FaGithub, FaExternalLinkAlt, FaInfoCircle, FaUsers, FaFolderOpen, FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isFav, setIsFav] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:8080/projects/${id}`);
        if (!res.ok) throw new Error("Failed to fetch project");
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error(err);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <p className="p-6 text-center text-lg font-medium">Loading...</p>;
  if (!project) return <p className="p-6 text-center text-xl text-red-600 font-semibold">Project not found.</p>;

  return (
    <div className="min-h-screen  p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <FaArrowLeft /> Back to previous page
        </button>

        {/* Hero Section */}
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-[250px] md:h-[450px]">
            <img
              src={project.thumbnail || "https://via.placeholder.com/1200x600?text=No+Image+Available"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-10">
              <div className="text-white">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-2">{project.title}</h1>
                <p className="text-lg md:text-xl font-light">{project.short_description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                  {project.technologies?.map((tech) => (
                    <span key={tech} className="bg-blue-500/80 text-white text-sm font-medium px-4 py-1 rounded-full backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsFav(!isFav)}
              className="absolute top-4 right-4 text-red-500 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-200"
            >
              {isFav ? <MdFavorite size={26} /> : <MdFavoriteBorder size={26} />}
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Content (3/4 width) */}
          <div className="md:col-span-3 space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                <FaInfoCircle className="text-blue-500" /> About the Project
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{project.long_description}</p>
            </div>

            {(project.github_link || project.website_link) && (
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <FaAngleDoubleRight className="text-blue-500" /> Project Links
                </h3>
                <div className="flex flex-wrap gap-4">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      <FaGithub size={20} /> GitHub Repository
                    </a>
                  )}
                  {project.website_link && (
                    <a
                      href={project.website_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      <FaExternalLinkAlt size={20} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            )}

            {project.team_members?.length > 0 && (
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <FaUsers className="text-blue-500" /> Team Members
                </h3>
                <ul className="list-none space-y-2 text-gray-700">
                  {project.team_members.map((member, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaAngleDoubleRight className="text-gray-400" />
                      {member.name || "Name not available"} - {member.role || "Role not specified"}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.source_files?.length > 0 && (
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <FaFolderOpen className="text-blue-500" /> Source Files
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {project.source_files.map((file, idx) => (
                    <li key={idx}>{file}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar (1/4 width) */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-3xl shadow-xl sticky top-8">
              <h2 className="text-xl font-bold mb-4">Quick Info</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="block text-gray-900">University:</strong> {project.university}
                </p>
                <p>
                  <strong className="block text-gray-900">Subject:</strong> {project.subject}
                </p>
                <p>
                  <strong className="block text-gray-900">Year:</strong> {project.university_year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;