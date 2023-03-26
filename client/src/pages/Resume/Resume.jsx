import './Resume.css'

const Resume = () => {
    return (
        <div className="resume-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="title">Education, Certification</h2>
                    </div>
                    <div className="col-md-8">
                        <div className="resume-content">
                            <div className="educations_item">
                                <h4>Bachelor's Degree in Internationale Medieninformatik</h4>
                                <p>University Bremen, Bremen <br />
                                    2022 - Today <br />
                                    Bachlor of scince</p>
                                <hr />
                            </div>
                            <div className="educations_item">
                                <h4>Education Training in business Informatics</h4>
                                <p>Europaschule schulzentrum Utbremen, Bremen<br />
                                    2019 - 2021<br />
                                    Assistant
                                </p>
                                <hr />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Resume