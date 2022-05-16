import './style.css'
import React, { useState } from 'react'
import SearchItem from './SearchItem'
import UserApi from '../../API/UserApi'
export default function SearchBar() {
    let TextInputRef ;
    let [SearchResult,setSearchResult] = useState([]) 

    function OnSeachInputChange(){
        UserApi.SearchUsers(TextInputRef.value).then(
            (users)=>{
                setSearchResult(users) 
            }
        )
    }
    return (

        <div className='w-100'>

            <div className="search-bar">
                <input ref={el=>(TextInputRef =el)} className='inputs' type="text" placeholder="Search" onChange={OnSeachInputChange} />
            </div>


            <div className="position-absolute rounded-2" style={{width:'89%' , background:'hsl(252deg 8% 12%)' ,overflowY:"auto" , maxHeight:300}}>

              {
                  SearchResult.map((user, i)=>{
                      return(
                                 <React.Fragment key={i}>
                                     <SearchItem user={user}/>
                                 </React.Fragment>
                      )
                  })
              }
          
         
            </div>

        </div>

    )
}