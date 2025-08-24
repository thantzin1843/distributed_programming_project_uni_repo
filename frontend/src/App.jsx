import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ForumListPage from './pages/ForumListPage'
import Layout from './pages/Layout'
import ProjectListPage from './pages/ProjectListPage'
import Home from './pages/Home'
function App() {
  return (
  //  <div>
  //     <ProfilePage />
  //   </div>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* user layout */}
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="projects" element={<ProjectListPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="forums" element={<ForumListPage />} />
      </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default App
