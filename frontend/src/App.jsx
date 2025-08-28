import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForumListPage from './pages/ForumListPage'
import Layout from './pages/Layout'
import ProjectListPage from './pages/ProjectListPage'
import Home from './pages/Home'
import ProjectDetailPage from './pages/ProjectDetailPage'
import NewProjectForm from './pages/NewProjectForm'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    //  <div>
    //     <ProfilePage />
    //   </div>
    <BrowserRouter>
    <ScrollToTop /> 
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* user layout */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectListPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="forums" element={<ForumListPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/projectupload" element={<NewProjectForm/>} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
