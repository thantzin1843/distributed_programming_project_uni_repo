// ForumListComp.jsx
import React from 'react';

const ForumListComp = () => {
  const forumPosts = [
    {
      upvotes: 48,
      replies: 12,
      views: 85,
      title: 'Optimizing Deep Learning Models for Medical Image Diagnosis',
      description: 'Our team is working on a final year project to develop a deep learning model for early cancer detection from MRI scans. We\'re facing challenges with model optimization and data augmentation techniques. Any insights or experienced researchers willing to share knowledge on transfer learning or specific CNN architectures?',
      tags: ['deep-learning', 'medical-imaging', 'ai', 'research-project'],
      author: 'Alex Chen',
      posted: '6 hours ago',
      lastActive: '45 minutes ago',
    },
    {
      upvotes: 35,
      replies: 8,
      views: 70,
      title: 'Sustainable Urban Planning: Integrating Green Infrastructure',
      description: 'As part of our urban studies program, we\'re developing proposals for integrating green infrastructure into existing cityscapes to combat climate change effects. We\'re looking for case studies or theoretical frameworks on effective policy implementation and community engagement strategies. Any examples of successful projects?',
      tags: ['urban-planning', 'sustainability', 'architecture'],
      author: 'Samira Khan',
      posted: '1 day ago',
      lastActive: '2 hours ago',
    },
    {
      upvotes: 22,
      replies: 6,
      views: 55,
      title: 'Challenges in Quantum Computing Algorithm Implementation',
      description: 'Our physics and computer science joint project explores practical challenges in implementing quantum algorithms on available simulators. Specifically looking for insights into error correction techniques and resource optimization for quantum circuits. Any suggestions on best practices or new research?',
      tags: ['quantum-computing', 'physics', 'algorithms'],
      author: 'Emily Zhao',
      posted: '3 days ago',
      lastActive: '10 hours ago',
    },
  ];

  const popularResearchAreas = [
    { name: 'computer-science', count: '12k' },
    { name: 'engineering', count: '9k' },
    { name: 'mathematics', count: '7.5k' },
    { name: 'biology', count: '6k' },
    { name: 'thesis', count: '5.5k' },
    { name: 'group-project', count: '5k' },
    { name: 'research-methods', count: '4k' },
  ];

  const trendingDiscussions = [
    { title: 'Effective strategies for literature review in humanities.', views: '1.5k views', time: '3 days ago' },
    { title: 'Tools and software for simulating complex circuits.', views: '1.1k views', time: '2 days ago' },
    { title: 'How to prepare for a successful thesis defense?', views: '900 views', time: '1 day ago' },
  ];

  return (
    <>
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10 ">
        <main className="lg:col-span-3">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <h1 className="text-4xl font-extrabold text-black mb-4 md:mb-0">Explore University Forum</h1>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 font-medium">Newest</button>
              <button className="px-5 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition duration-300 font-medium">Trending</button>
              <button className="px-5 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 font-medium">Unanswered</button>
            </div>
          </div>
          {forumPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200 hover:border-gray-400 transition duration-300">
              <div className="flex items-start">
                <div className="flex flex-col items-center mr-8 text-center flex-shrink-0">
                  <div className="text-2xl font-bold text-gray-800">{post.upvotes}</div>
                  <div className="text-sm text-gray-500 mb-2">upvotes</div>
                  <div className="text-xl font-bold text-blue-500">{post.replies}</div>
                  <div className="text-sm text-gray-500 mb-2">replies</div>
                  <div className="text-md text-gray-500">{post.views}</div>
                  <div className="text-sm text-gray-500">views</div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black mb-3 hover:text-gray-800 transition duration-300">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p className="text-gray-700 mb-5 line-clamp-3">{post.description}</p>
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full hover:bg-blue-300 cursor-pointer transition duration-300">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Posted by <a href="#" className="text-blue-700 font-bold hover:underline">{post.author}</a> {post.posted}</span>
                    <span>Last active {post.lastActive}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-10">
            <nav className="flex space-x-3">
              <a href="#" className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 font-medium">Previous</a>
              <a href="#" className="px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition duration-300 font-medium">1</a>
              <a href="#" className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 font-medium">2</a>
              <a href="#" className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 font-medium">3</a>
              <a href="#" className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 font-medium">Next</a>
            </nav>
          </div>
        </main>

        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-5">Popular Research Areas</h3>
            <div className="flex flex-wrap gap-2">
              {popularResearchAreas.map((area, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 text-sm px-4 py-1.5 rounded-full hover:bg-gray-300 cursor-pointer transition duration-300">{area.name} ({area.count})</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-5">Trending Discussions</h3>
            <ul>
              {trendingDiscussions.map((discussion, index) => (
                <li key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                  <a href="#" className="text-gray-800 hover:text-black transition duration-300 font-medium">{discussion.title}</a>
                  <p className="text-sm text-gray-500 mt-1">{discussion.views} &bull; {discussion.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <footer className="bg-gray-100 text-gray-600 py-8 px-6 md:px-10 text-center">
        <div className="container mx-auto">
          <p>&copy; 2025 UniConnect. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-5">
            <a href="#" className="hover:text-black transition duration-300">About</a>
            <a href="#" className="hover:text-black transition duration-300">Contact</a>
            <a href="#" className="hover:text-black transition duration-300">Terms of Use</a>
            <a href="#" className="hover:text-black transition duration-300">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ForumListComp;