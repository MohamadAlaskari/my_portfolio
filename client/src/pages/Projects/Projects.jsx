import './Projects.css'

const Projects = () => {
    return (
        <div className='container'>
            <div className="row projects-page">
                <div className="col-xxl-2">

                    <h2>Selected Works</h2>
                </div>
                <div className="col-xl-10">

                    <div className="projects-items">
                        <div className="project-item">
                            <div className="projects-img-container">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5-jcPdioheEwSWoVbHL0v0q4RQoDcnQJsg&usqp=CAU" alt="" />
                            </div>
                            <h5>Cyporg app - React app</h5>
                            <p>2023</p>
                        </div>
                        <div className="project-item">
                            <div className="projects-img-container">
                                <img src="https://www.website.com/img/skin/fb202111.png" alt="" />
                            </div>
                            <h5>User app - MERN app</h5>
                            <p>2023</p>
                        </div>
                        <div className="project-item">
                            <div className="projects-img-container">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5-jcPdioheEwSWoVbHL0v0q4RQoDcnQJsg&usqp=CAU" alt="" />
                            </div>
                            <h5>Smart Street - Website</h5>
                            <p>2023</p>
                        </div>
                        <div className="project-item">
                            <div className="projects-img-container">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5-jcPdioheEwSWoVbHL0v0q4RQoDcnQJsg&usqp=CAU" alt="" />
                            </div>
                            <h5>Döner - Broschür</h5>
                            <p>2023</p>
                        </div>
                        <div className="project-item">
                            <div className="projects-img-container">
                                <img src="https://www.website.com/img/skin/fb202111.png" alt="" />
                            </div>
                            <h5>Pizza Belami - Flyer</h5>
                            <p>2022</p>
                        </div>
                        <div className="project-item">
                            <div className="projects-img-container">
                                <img src="https://www.website.com/img/skin/fb202111.png" alt="" />
                            </div>
                            <h5>Alaskary Code - Website</h5>
                            <p>2021</p>
                        </div>
                        <div className="project-item">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                            <div className="projects-img-container">
                                <img src="https://www.website.com/img/skin/fb202111.png" alt="" />
                            </div>
                            <h5>Alaskari Code - Busniss Card</h5>
                            <p>2021</p>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects