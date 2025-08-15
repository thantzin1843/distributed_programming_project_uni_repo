import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ForumListPage from './pages/ForumListPage'
import Layout from './pages/Layout'
function App() {
  return (
  //  <div>
  //     <ProfilePage />
  //   </div>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path='/' element={<Layout/>}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="forums" element={<ForumListPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
