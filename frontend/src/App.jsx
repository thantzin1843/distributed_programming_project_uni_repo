
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
import Dashboard from './pages/University/Dashboard'
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
          <Route index element={<ProjectListPage />} />
          <Route path="projects" element={<ProjectListPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="forums" element={<ForumListPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/projectupload" element={<NewProjectForm/>} />

          <Route path="forums/ask" element={<ForumFormPage />} />
        <Route path="forums/:id" element={<ForumDetailPage/>} />
      </Route>

      <Route path='/university' element={<UniversityLayout/>}>
        <Route index element={<Dashboard />} />
      </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
