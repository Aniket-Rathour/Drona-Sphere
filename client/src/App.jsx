import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Gossips from './pages/Gossips'
import Messages from './pages/Messages'
import ChatBox from './pages/ChatBox'
import Connections from './pages/Connections'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import Memes from './pages/Memes'
import Confessions from './pages/Confessions'
import Dating from './pages/Dating'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} ></Route>
        <Route path="/login" element={<Login></Login>}>
            <Route index element={<Gossips></Gossips>}></Route>
            <Route path="messages" element={<Messages></Messages>}></Route>
            <Route path="messages/:userId" element={<ChatBox></ChatBox>}></Route>
            <Route path="connections" element={<Connections></Connections>}></Route>
            <Route path="discover" element={<Discover></Discover>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
            <Route path="profile/:profileId" element={<Profile></Profile>}></Route>
            <Route path="create-post" element={<CreatePost></CreatePost>}></Route>
            <Route path="memes" element={<Memes></Memes>}></Route>
            <Route path="confessions" element={<Confessions></Confessions>}></Route>
            <Route path="dating" element={<Dating></Dating>}></Route>  
        </Route>
      </Routes>
    </>
  )
}

export default App
