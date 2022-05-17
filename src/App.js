import Home from './pages/Home'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate
} from "react-router-dom";
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import Case from './pages/Case';
import MeduUsers from './pages/MeduUsers';
import MeduSessions from './pages/MeduSessions';
import NewMeduSession from './pages/NewMeduSession';

function App() {
  const user = useSelector((state)=> state.user)
  const cUser = user.currentUser ? user.currentUser : false;
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/case' element={<Case/>}/>
        <Route path='/meduusers' element={<MeduUsers/>}/>
        <Route path='/medusessions' element={<MeduSessions/>}/>
        <Route path='/createsession' element={<NewMeduSession/>}/>
      </Routes>
    </Router>
  );
}

export default App;
