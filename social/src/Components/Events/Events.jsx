export default function Events(params) {
    return (
        <div className=" rounded-3 m-auto " style={{width:"95%" ,background:"#1d1c21",position:"sticky" ,top:82,zIndex:44}}>
            <span className="text-light p-3 h3 ">Events</span>
            <img className="w-100 mt-2 mb-3" style={{ height: 150 }} src="../assets/party.jpg" />
            <span className="text-light h4 p-3">Recent Events</span>


            <div className="pb-2">

             
               
              
                <div className="d-flex flex-wrap px-2 mt-3 mb-2 align-items-center">
                    <img className="w-25 rounded-3 mx-3  " src="https://blue-glue.com/wp-content/uploads/2022/01/chai-tea.jpg" style={{objectFit:"cover"}} />
                    <div className=" " >
                        <span className="h5 d-block text-light">Tea party</span>
                        <span style={{color:"gray"}}>12 des 2022</span>
                    </div>
                </div>

                <div className="d-flex flex-wrap px-2 mt-3 mb-2 align-items-center">
                    <img className="w-25 rounded-3 mx-3  " src="https://www.atomicheritage.org/sites/default/files/styles/large/public/Plumbbob-Hood%20%28CN80-2653%29%29%20LA-UR-06-1068_1.jpg?itok=gH6k91FF" />
                    <div className=" " >
                        <span className="h5 d-block text-light">The End</span>
                        <span style={{color:"gray"}}>12 des 2050</span>
                    </div>
                </div>
                


            </div>
        </div>
    )
}