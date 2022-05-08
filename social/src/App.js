import logo from './logo.svg';
import './App.css';
import RigisterPage from './Components/RigisterPage';
import 'rsuite/dist/rsuite.min.css';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Components/Login';
import MainPage from './Components/MainPage';
import Post from './Components/PostsPage/posts';
import Store from './Components/store';
import People from './Components/people';

import PeopleHolder from './Components/people/PeopleHolder';
import Messenger from './Components/messenger/messagePage';
import WatchHolder from './Components/Watch/watch';
import Profile from './Components/Profile/Profile';
import HomeFeed from './Components/PostsPage/HomeFeed';
function App() {
  return (
    <>
    <div className='test'  >
    <Routes >
        <Route path='/' element={< RigisterPage/>}  ></Route> 
        <Route path='/Login' element={<LoginForm />}  ></Route>
        <Route path='/profile/:id' element={<Profile />}  ></Route>
        <Route path='/Home' element={<MainPage/>}>
          <Route  path='post' element={<HomeFeed />} />
          <Route path='store' element={<Store />} />
          <Route path='people' element={<PeopleHolder />} />
          <Route path='watch' element={<WatchHolder />} />
        </Route>
      </Routes>

    </div>
      

    </>
  );
}

export default App;