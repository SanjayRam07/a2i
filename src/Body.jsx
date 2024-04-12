import './Body.css'

function Body() {
    return (
        <div className="body">
            <div className="features">
                <h1>Features</h1>
                <div className="row1">
                    <img src={process.env.PUBLIC_URL+'/pana.png'} alt="pana" />
                    <div className="col1">
                        <div className="irow11">
                            <div className="logo circle">
                                <img src={process.env.PUBLIC_URL+'/feat1.png'} alt="feat1" />
                            </div>
                            <div className="info">
                                Class emphasizes peer to peer learning
                            </div>
                        </div>
                        <div className="irow11">
                            <div className="logo circle">
                                <img src={process.env.PUBLIC_URL+'/feat2.png'} alt="feat2" />
                            </div>
                            <div className="info">
                                One to one teaching with individual
                            </div>
                        </div>
                        <div className="irow11">
                            <div className="logo circle">
                                <img src={process.env.PUBLIC_URL+'/feat3.png'} alt="feat3" />
                            </div>
                            <div className="info">
                            Lifetime access to course materials
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;