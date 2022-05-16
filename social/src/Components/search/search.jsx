import './style.css'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import SearchItem from './SearchItem'

export default function SearchBar() {

    let [SearchResult,setSearchResult] = useState([1,2,3]) 

    return (

        <div className='w-100'>

            <div className="search-bar">
                <input className='inputs' type="text" placeholder="Search" />
            </div>


            <div className="position-absolute roubded-2" style={{width:'89%' , background:'hsl(252deg 8% 12%)'}}>

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