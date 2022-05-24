import { Outlet } from "react-router-dom"
import FriendsList from "./friendsList/FriendsList"
import Music from "./Music/music"
import CreatePost from "./PostsPage/CreatePost"
import RecentViewList from "./RecentView/RecentViewList"
import SearchBar from "./search/search"
import StoryHolder from "./Story/storyHolder"
import RightNavBar from "./TablerMainPage/rightNavBar"
import NavMainPage from "./TablerMainPage/TablerMain"

function MainPage(params) {


    return (
        <>
            <div className="row m-0 p-2 ">
                <div className="col-3 d-sm-none  d-lg-block " >
                 

                    <FriendsList />
                    <RecentViewList/>
                 

                </div>

                <div className="col-lg-9 col-md-12">

                    <div className="d-flex flex-wrap mainNav">
                        <div className="col-4 position-relative "><SearchBar /></div>
                        <div className="col-4"><NavMainPage /></div>
                        <div className="col-4"><RightNavBar/></div>
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="col-8 ">
                            <div>
                                <Outlet />
                            </div>
                        </div>
                        <div className="col-4 "style={{paddingLeft:12}}>
                            {/* <RecentViewList /> */}
                            <Music></Music>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default MainPage