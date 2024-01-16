import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { JoinPage } from './pages/JoinPage'
import { AdminPage } from './pages/AdminPage'
import { SettingsPage } from './pages/SettingsPage'
import CounterPage from './pages/CounterPage'
import { io } from 'socket.io-client'
import { useEffect } from 'react'

function connectWithServer() {
  console.log('Connecting with server...')
  // import { io } from "socket.io-client"

  const socket = io('ws://localhost:3000')

  socket.on('join-ack', (_) => console.log(_))

  socket.emit('connection')
}

function App() {
  useEffect(() => {
    const socket = io('127.0.0.1:3000')
    // setSocket(socket)

    socket.on('connect', () => {
      console.log(socket.id)
      socket.emit('joinAdmin', {
        password: 'ADMIN_PASSWORD',
      })
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JoinPage />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="admin" element={<AdminPage />} /> */}
          {/* <Route path="setting" element={<SettingsPage />} /> */}
          <Route path="counter" element={<CounterPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)

export default App
