import { Outlet } from "react-router-dom"
import FriendsList from "./friendsList/FriendsList"
import Music from "./Music/music"
import Player from "./Player/Player"
import CreatePost from "./PostsPage/CreatePost"
import RecentViewList from "./RecentView/RecentViewList"
import SearchBar from "./search/search"
import StoryHolder from "./Story/storyHolder"
import RightNavBar from "./TablerMainPage/rightNavBar"
import NavMainPage from "./TablerMainPage/TablerMain"
import {useEffect , useState} from 'react'
import Events from "./Events/Events"
function MainPage(params) {

    const [songs] = useState([
        {
          title: "Forget me too ft. Halsey",
          artist: "Machine Gun Kelly",
          img_src: "./images/song-1.jpg",
          src: "./music/on-n-on.mp3"
        },
        {
          title: "Song 2",
          artist: "Artist 2",
          img_src: "./images/song-2.jpg",
          src: "./music/somebody-new.mp3"
        },
        {
          title: "Song 3",
          artist: "Artist 3",
          img_src: "./images/song-3.jpg",
          src: "./music/on-n-on.mp3"
        },
        {
          title: "Song 4",
          artist: "Artist 4",
          img_src: "./images/song-4.jpg",
          src: "./music/somebody-new.mp3"
        }
      ]);
    
      const [currentSongIndex, setCurrentSongIndex] = useState(0);
      const [nextSongIndex, setNextSongIndex] = useState(0);
    
      useEffect(() => {
        setNextSongIndex(() => {
          if (currentSongIndex + 1 > songs.length - 1) {
            return 0;
          } else {
            return currentSongIndex + 1;
          }
        });
      }, [currentSongIndex]);
    


    return (
        <>
            <div className="row m-0 p-2 ">
                <div className="col-3 d-sm-none  d-none d-lg-block  " >
                 

                    <FriendsList  />
                    <RecentViewList/>
                 

                </div>

                <div className="col-lg-9 col-md-12">

                    <div className="d-flex flex-wrap mainNav">
                        <div className="col-lg-4 col-2 position-relative "><SearchBar /></div>
                        <div className="col-lg-4 col-7 "><NavMainPage /></div>
                        <div className="col-lg-4 col-3 " ><RightNavBar/></div>
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="col-lg-8 col-sm-12 col-md-8 ">
                            <div>
                                <Outlet />
                            </div>
                        </div>
                        <div className="col-4     d-none d-lg-block d-md-block "style={{paddingLeft:12}}>
                            {/* <RecentViewList /> */}
                            {/* <Music></Music> */}
                           <Events></Events>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default MainPage