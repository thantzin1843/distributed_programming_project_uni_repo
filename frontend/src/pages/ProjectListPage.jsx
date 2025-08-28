

import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // New icons for mobile menu
import { ListFilter, ThumbsUp } from 'lucide-react';

const categories = [
    "AI & Machine Learning",
    "Web Development",
    "Mobile Apps",
    "Cloud Computing",
    "Cybersecurity",
    "Data Science",
    "IoT",
    "Blockchain",
    "Robotics",
    "AR/VR",
    "Networking",
    "Embedded Systems",
    "Game Development",
    "Bioinformatics",
    "Other"
];

function CategoryFilter() {
    const [visibleCount, setVisibleCount] = useState(5);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSeeMore = () => {
        setVisibleCount((prev) => Math.min(prev + 5, categories.length));
    };

    const handleSeeLess = () => {
        setVisibleCount((prev) => Math.max(prev - 5, 5));
    };

    return (
        <div>
            {categories.slice(0, visibleCount).map((cat) => (
                <label key={cat} className="flex items-center mb-2 cursor-pointer">
                    <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="mr-2"
                    />
                    {cat}
                </label>
            ))}
            {visibleCount < categories.length && (
                <button
                    type="button"
                    className="text-blue-500 underline text-xs mt-2"
                    onClick={handleSeeMore}
                >
                    See more
                </button>
            )}
            {visibleCount > 5 && (
                <button
                    type="button"
                    className="text-blue-500 underline text-xs mt-2 ml-2"
                    onClick={handleSeeLess}
                >
                    See less
                </button>
            )}
        </div>
    );
}

function ProjectListPage() {
    const [rating, setRating] = useState(0);
    const [tagList, setTagList] = useState([]);
    const [technologyList, setTechnologyList] = useState([]);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false); // New state for mobile filters
    const TAGS = ["Chatbot", "ML", "Automation", "Cloud"];
    const TECHNOLOGIES = ["JavaScript", "React", "Node.js", "Python"];

    const handleTagClick = (tag) => {
        if (tagList.includes(tag)) {
            setTagList(tagList.filter((t) => t !== tag));
        } else {
            setTagList([...tagList, tag]);
        }
    };

    const handleTechnologyClick = (tech) => {
        if (technologyList.includes(tech)) {
            setTechnologyList(technologyList.filter((t) => t !== tech));
        } else {
            setTechnologyList([...technologyList, tech]);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 md:p-8">
            <h1 className="text-2xl font-bold mb-4">Discover University Projects</h1>

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mb-4 md:mb-0">
                    <select className="p-2 border border-gray-300 rounded bg-white">
                        <option value="computer-science">Sort by: Newest</option>
                        <option value="engineering">Highest Rated</option>
                        <option value="engineering">Most Viewed</option>
                    </select>
                    <select className="p-2 border border-gray-300 rounded bg-white">
                        <option value="">Filter by university</option>
                        <option value="uit">University of Information Technology</option>
                        <option value="ucsy">University of Computer Study, Yangon</option>
                    </select>
                </div>

                <div className='flex items-center w-full md:w-auto'>
                    <input type="text" placeholder="Search projects..." className="p-2 h-10 border border-gray-300 rounded w-full md:w-64" />
                    <button className='p-2 h-10 bg-blue-400 rounded-md ms-2'><CiSearch size={20} color='white'/></button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Mobile Filter Toggle Button */}
                <div className="md:hidden flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button
                        className="p-2 text-gray-700 hover:text-gray-900"
                        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                    >
                        {mobileFiltersOpen ? <FaTimes size={20} /> : <ListFilter size={20} />}
                    </button>
                </div>
                
                {/* Filter Sidebar */}
                <div className={`
                    fixed top-0 left-0 h-full w-64 bg-white p-4 z-50 transition-transform duration-300 ease-in-out transform
                    ${mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"}
                    md:relative md:translate-x-0 md:block md:w-1/5 md:pe-3
                `}>
                    <div className="md:hidden flex justify-end mb-4">
                        <button
                            className="text-gray-700 hover:text-gray-900"
                            onClick={() => setMobileFiltersOpen(false)}
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow mb-6 md:shadow-none">
                        <h2 className="text-lg font-semibold mb-4 hidden md:block">Filters</h2>

                        {/* Category Filter */}
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Category</label>
                            <CategoryFilter />
                        </div>

                        {/* Tags Filter */}
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Tags</label>
                            <div className="flex flex-wrap gap-2">
                                {TAGS.map((tag) => (
                                    <button
                                        key={tag}
                                        className={`px-2 py-1 rounded-full text-xs border transition-colors duration-200 focus:outline-none ${
                                            tagList.includes(tag)
                                                ? "bg-blue-500 text-white border-blue-500"
                                                : "bg-blue-100 text-blue-800 border-blue-200"
                                        }`}
                                        onClick={() => handleTagClick(tag)}
                                    >
                                        {tag}
                                        {tagList.includes(tag) && (
                                            <span className="ml-1 text-xs font-bold">×</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Rating Filter */}
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Minimum Rating</label>
                            {[1, 2, 3, 4, 5].map((r) => (
                                <label key={r} className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={r}
                                        checked={r === rating}
                                        onChange={() => setRating(r)}
                                        className="mr-2"
                                    />
                                    <span className="text-yellow-500 text-2xl ">★</span>{r}
                                </label>
                            ))}
                        </div>

                        {/* Technology Used Filter */}
                        <div>
                            <label className="block font-medium mb-2">Technology Used</label>
                            <div className="flex flex-wrap gap-2">
                                {TECHNOLOGIES.map((tech) => (
                                    <button
                                        key={tech}
                                        className={`px-2 py-1 rounded-full text-xs border transition-colors duration-200 focus:outline-none ${
                                            technologyList.includes(tech)
                                                ? "bg-green-500 text-white border-green-500"
                                                : "bg-green-100 text-green-800 border-green-200"
                                        }`}
                                        onClick={() => handleTechnologyClick(tech)}
                                    >
                                        {tech}
                                        {technologyList.includes(tech) && (
                                            <span className="ml-1 text-xs font-bold">×</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overlay for mobile view */}
                {mobileFiltersOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                        onClick={() => setMobileFiltersOpen(false)}
                    ></div>
                )}
                
                {/* Project List */}
                <div className="w-full md:w-4/5 md:pl-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6).keys()].map((index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <div className="relative w-full h-[250px] mb-4">
                                    <img src="https://investingnews.com/media-library/robot-hand-touching-human-hand-with-a-spark-in-between.jpg?id=33553684&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C1" className='w-full h-full object-cover rounded-lg' alt="Project thumbnail" />
                                    <button className='absolute top-3 right-3 text-xl border rounded-full p-2 bg-white hover:bg-gray-200'><ThumbsUp size={25} /></button>
                                </div>
                                <h2 className="text-xl font-semibold mb-2 line-clamp-2">Project Title</h2>
                                <div className='mb-2'>By <span className="text-blue-500 underline font-bold">UIT teams</span></div>
                                <p className="text-gray-600 mb-4 line-clamp-3">Brief description of the project goes here. It should be concise and informative. A customer service chatbot using Natural Language Processing (NLP) and machine learning.</p>
                                <div className='flex gap-2 flex-wrap mb-3'>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">JavaScript</span>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">React</span>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">Node.js</span>
                                </div>
                                <div className='flex items-center gap-1 mb-3'>
                                    <span className="text-yellow-500 text-2xl ">★</span><span className='text-md font-bold'>4.5</span><span className='text-gray-600'>(100 ratings)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500 w-2/3">University of Information Technology, Yangon</span>
                                    <a href="#" className="text-sm cursor-pointer text-blue-500 flex items-center gap-1">View Details <FaAngleDoubleRight className='inline' /></a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-5">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex -space-x-px text-sm">
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectListPage;