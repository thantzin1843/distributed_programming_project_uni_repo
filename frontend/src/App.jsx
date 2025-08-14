import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <ProfilePage />
    </div>
  )
}

export default App
