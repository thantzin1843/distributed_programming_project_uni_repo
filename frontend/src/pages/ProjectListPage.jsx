import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Subject Filter Component
function SubjectFilter({ selectedSubject, setSelectedSubject, subjects }) {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleSeeMore = () => setVisibleCount((prev) => Math.min(prev + 5, subjects.length));
  const handleSeeLess = () => setVisibleCount((prev) => Math.max(prev - 5, 5));

  return (
    <div>
      <label className="flex items-center text-sm mb-2 cursor-pointer hover:text-blue-600">
        <input
          type="radio"
          name="subject"
          value=""
          checked={selectedSubject === ""}
          onChange={() => setSelectedSubject("")}
          className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        All
      </label>

      {subjects.slice(0, visibleCount).map((subj) => (
        <label key={subj} className="flex items-center text-sm mb-2 cursor-pointer hover:text-blue-600">
          <input
            type="radio"
            name="subject"
            value={subj}
            checked={selectedSubject === subj}
            onChange={() => setSelectedSubject(subj)}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          {subj}
        </label>
      ))}

      <div className="flex gap-4 mt-3 text-xs">
        {visibleCount < subjects.length && (
          <button type="button" className="text-blue-600 font-semibold hover:underline" onClick={handleSeeMore}>
            See more
          </button>
        )}
        {visibleCount > 5 && (
          <button type="button" className="text-blue-600 font-semibold hover:underline" onClick={handleSeeLess}>
            See less
          </button>
        )}
      </div>
    </div>
  );
}

// Tag Filter Component
function TagFilter({ selectedTags = [], setSelectedTags, tags = [] }) {
  const handleTagClick = (tag) => {
    setSelectedTags(selectedTags.includes(tag) 
      ? selectedTags.filter((t) => t !== tag) 
      : [...selectedTags, tag]
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedTags.includes(tag)
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
          {selectedTags.includes(tag) && <span className="ml-1 font-bold">×</span>}
        </button>
      ))}
    </div>
  );
}


// Technology Filter Component
function TechnologyFilter({ selectedTechnologies = [], setSelectedTechnologies, technologies = [] }) {
  const handleTechClick = (tech) => {
    setSelectedTechnologies(
      selectedTechnologies.includes(tech)
        ? selectedTechnologies.filter((t) => t !== tech)
        : [...selectedTechnologies, tech]
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <button
          key={tech}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedTechnologies.includes(tech)
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleTechClick(tech)}
        >
          {tech}
          {selectedTechnologies.includes(tech) && <span className="ml-1 font-bold">×</span>}
        </button>
      ))}
    </div>
  );
}


function ProjectListPage() {
  const [projects, setProjects] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, limit: 6, total: 0, pages: 0 });
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ rating: 0, tags: [], technologies: [], subject: "" });
  const [subjects, setSubjects] = useState([]);
  const [tags, setTags] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const location = useLocation();

  // Toast on success
  useEffect(() => {
    if (location.state?.success) {
      toast.success(location.state.success, { position: "top-center" });
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Fetch projects
  const fetchProjects = async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append("page", page);
      params.append("limit", pagination.limit);
      if (filters.subject) params.append("subject", filters.subject);
      if (filters.rating > 0) params.append("rating", filters.rating);
      if (filters.tags.length > 0) params.append("tags", filters.tags.join(","));
      if (filters.technologies.length > 0) params.append("technologies", filters.technologies.join(","));

      const res = await fetch(`http://localhost:8080/projects/?${params.toString()}`);
      const data = await res.json();
      setProjects(data.data);
      setPagination(data.pagination);
    } catch (err) {
      console.error(err);
      setProjects([]);
    }
    setLoading(false);
  };

  // Fetch filter options from API
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [subjRes, tagRes, techRes] = await Promise.all([
          fetch("http://localhost:8080/subjects"),
          fetch("http://localhost:8080/tags"),
          fetch("http://localhost:8080/technologies"),
        ]);
        const [subjData, tagData, techData] = await Promise.all([subjRes.json(), tagRes.json(), techRes.json()]);
        setSubjects(subjData.subjects);
        setTags(tagData.tags);
        setTechnologies(techData.technologies);
      } catch (err) {
        console.error("Failed to fetch filter options:", err);
      }
    };
    fetchFilters();
  }, []);

  // Re-fetch projects when filters change
  useEffect(() => {
    fetchProjects(1);
  }, [filters]);

  const goToPage = (page) => {
    if (page >= 1 && page <= pagination.pages) fetchProjects(page);
  };

  return (
    <div className="min-h-screen">
      <ToastContainer />
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">Discover University Projects</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-1/4 space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Subject</h3>
              <SubjectFilter
                subjects={subjects}
                selectedSubject={filters.subject}
                setSelectedSubject={(subj) => setFilters((prev) => ({ ...prev, subject: subj }))}
              />
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Tags</h3>
              <TagFilter
                tags={tags}
                selectedTags={filters.tags}
                setSelectedTags={(tags) => setFilters((prev) => ({ ...prev, tags }))}
              />
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Technologies</h3>
              <TechnologyFilter
                technologies={technologies}
                selectedTechnologies={filters.technologies}
                setSelectedTechnologies={(techs) => setFilters((prev) => ({ ...prev, technologies: techs }))}
              />
            </div>
          </aside>

          {/* Main */}
          <main className="w-full md:w-3/4">
            {loading ? (
              <p className="text-center text-lg text-gray-600">Loading projects...</p>
            ) : projects.length === 0 ? (
              <div className="text-center p-10">
                <h2 className="text-xl font-semibold text-gray-700">No Projects Found</h2>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                      <div className="relative h-[180px]">
                        <img
                          src={project.thumbnail || "https://via.placeholder.com/400x200"}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          alt={project.title}
                        />
                      </div>
                      <div className="p-5">
                        <h2 className="text-lg font-semibold mb-1 line-clamp-2">{project.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">{project.university}</p>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{project.short_description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies?.slice(0, 3).map((tech) => (
                            <span key={tech} className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">{tech}</span>
                          ))}
                        </div>
                        <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                          View Details <FaAngleDoubleRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {projects.length > 0 && (
                  <div className="flex justify-center items-center mt-10 gap-2">
                    <button
                      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => goToPage(pagination.page - 1)}
                      disabled={pagination.page <= 1}
                    >
                      Previous
                    </button>

                    {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          pagination.page === p ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100"
                        }`}
                        onClick={() => goToPage(p)}
                      >
                        {p}
                      </button>
                    ))}

                    <button
                      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => goToPage(pagination.page + 1)}
                      disabled={pagination.page >= pagination.pages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProjectListPage;
