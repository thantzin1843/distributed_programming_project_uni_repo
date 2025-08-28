
import React, { useState } from 'react';
// import CodeEditor from '../../components/CodeEditor';

const tagOptions = [
	'deep-learning', 'medical-imaging', 'ai', 'research-project',
	'urban-planning', 'sustainability', 'architecture',
	'quantum-computing', 'physics', 'algorithms',
	'computer-science', 'engineering', 'mathematics', 'biology', 'thesis', 'group-project', 'research-methods'
];

const projectOptions = [
	'Medical Imaging AI', 'Urban Green Infrastructure', 'Quantum Algorithms', 'Thesis', 'Group Project', 'Other'
];

const ForumFormPage = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [selectedTag, setSelectedTag] = useState(tagOptions[0]);
	const [tags, setTags] = useState([]);
	const [projectRef, setProjectRef] = useState(projectOptions[0]);
	const [image, setImage] = useState(null);

	const handleAddTag = () => {
		if (selectedTag && !tags.includes(selectedTag)) {
			setTags([...tags, selectedTag]);
		}
	};

	const handleRemoveTag = (tag) => {
		setTags(tags.filter(t => t !== tag));
	};

	const handleImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Submit logic here
		alert('Forum post submitted!');
	};


	return (
		<div className="container mx-auto px-6 py-10 flex justify-center">
			<form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl border border-gray-200 hover:border-gray-400 transition duration-300">
				<h1 className="text-3xl font-extrabold text-black mb-8">Create Forum Post</h1>
				{/* Code editor */}
{/* <CodeEditor/> */}
				{/*  */}
				<div className="mb-6">
					<label className="block text-gray-700 font-semibold mb-2">Title</label>
					<input
						type="text"
						value={title}
						onChange={e => setTitle(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
						placeholder="Enter post title"
						required
					/>
				</div>

				<div className="mb-6">
					<label className="block text-gray-700 font-semibold mb-2">Body</label>
					<textarea
						value={body}
						onChange={e => setBody(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg min-h-[120px]"
						placeholder="Describe your project, challenges, or questions..."
						required
					/>
				</div>

				
				<div className="mb-6">
					<label className="block text-gray-700 font-semibold mb-2">Tags</label>
					<div className="flex gap-3 items-center mb-3">
						<select
							value={selectedTag}
							onChange={e => setSelectedTag(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-md"
						>
							{tagOptions.map((tag, idx) => (
								<option key={idx} value={tag}>{tag}</option>
							))}
						</select>
						<button
							type="button"
							onClick={handleAddTag}
							className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-300 transition duration-300"
						>Add</button>
					</div>
					<div className="flex flex-wrap gap-2">
						{tags.map((tag, idx) => (
							<span key={idx} className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2">
								{tag}
								<button type="button" onClick={() => handleRemoveTag(tag)} className="ml-1 text-blue-500 hover:text-red-500">&times;</button>
							</span>
						))}
					</div>
				</div>

				<div className="mb-6">
					<label className="block text-gray-700 font-semibold mb-2">Project Reference</label>
					<select
						value={projectRef}
						onChange={e => setProjectRef(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-md"
					>
						{projectOptions.map((proj, idx) => (
							<option key={idx} value={proj}>{proj}</option>
						))}
					</select>
				</div>

				<div className="mb-8">
					<label className="block text-gray-700 font-semibold mb-2">Image Upload</label>
					<input
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-md"
					/>
					{image && (
						<div className="mt-3">
							<img src={URL.createObjectURL(image)} alt="Preview" className="max-h-40 rounded-lg border border-gray-200" />
						</div>
					)}
				</div>

				<button
					type="submit"
					className="w-full py-3 rounded-lg bg-blue-500 text-white font-bold text-lg hover:bg-blue-700 transition duration-300"
				>Post Discussion</button>
			</form>
		</div>
	);
};

export default ForumFormPage;
