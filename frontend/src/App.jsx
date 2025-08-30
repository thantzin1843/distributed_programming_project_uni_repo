
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


import ForumFormPage from './pages/Forums/ForumFormPage'
import ForumDetailPage from './pages/Forums/ForumDetailPage'
import UniversityLayout from './pages/University/UniversityLayout'
import UniDashboard from './pages/University/UniDashboard'

import AdDashboard from './pages/Admin/AdDashboard'
import SignUpForm from './pages/University/SignUpForm'
import AdLayout from './pages/Admin/Adlayout'
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
          {/* <Route index element={<ProjectListPage />} /> */}
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectListPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="forums" element={<ForumListPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/projectupload" element={<NewProjectForm/>} />

          <Route path="forums/ask" element={<ForumFormPage />} />
        <Route path="forums/:id" element={<ForumDetailPage/>} />
      </Route>

      <Route path='/university' element={<UniversityLayout/>}>
        <Route index element={<UniDashboard />} />
        <Route path="dashboard" element={<UniDashboard />} />
        <Route path="students" element={<div>Students Page</div>} />
        <Route path="projects" element={<div>Projects Page</div>} />  
        <Route path="profile" element={<div>Profile Page</div>} />
        <Route path="settings" element={<div>Settings Page</div>} />
      </Route>
      <Route path = '/admin' element = {<AdLayout/>} >
        <Route index element={<AdDashboard />} />
        <Route path="dashboard" element={<AdDashboard />} />
        <Route path="universities" element={<div>University Page</div>} />
        <Route path="projects" element={<div>Projects Page</div>} />  
        <Route path="settings" element={<div>Settings Page</div>} />
      </Route>
      <Route>
        <Route path="/Unirequest" element={<SignUpForm />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
