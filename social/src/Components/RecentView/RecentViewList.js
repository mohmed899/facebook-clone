export default function RecentViewList(params) {

    return (
        <div style={{ background: '#1d1c21', paddingBottom: 10 }} className="  d-flex flex-wrap rounded-2 mt-3 stiky">
            <h3 className="m-auto">Recent view</h3>
            <div className="stiky d-flex flex-wrap  justify-content-evenly">
                <div className="mt-2 rounded-3 overflow-hidden">
                    <div style={{ width: 120, height: 120 }}>
                        <img src="https://i.pinimg.com/564x/40/bb/ac/40bbac5a388a96ec19478a6272cd9765.jpg" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                <div className="mt-2 rounded-3 overflow-hidden">
                    <div style={{ width: 120, height: 120 , objectFit:'cover'}}>
                        <img src="https://i.pinimg.com/564x/f6/af/8b/f6af8b1b96cdca1cd11e71fd0bd77a4f.jpg" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                <div className="mt-2 rounded-3 overflow-hidden">
                    <div style={{ width: 120, height: 120 }}>
                        <img src="https://i.pinimg.com/564x/a5/c7/87/a5c7873cc60ad70ecda3e5310afffaa4.jpg" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                <div className="mt-2 rounded-3 overflow-hidden">
                    <div style={{ width: 120, height: 120 }}>
                        <img src="https://i.pinimg.com/564x/bb/e3/6b/bbe36b5d0222e95e6a6bc6832dca3f99.jpg" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>


        </div>
    )
}