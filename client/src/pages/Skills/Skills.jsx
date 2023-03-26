import './Skills.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4"><h2>Skills</h2></div>
                <div className="col-md-8">
                    <div className="Skills-content">
                        <div className="skill-item">
                            <h5>Java</h5>
                            <ProgressBar variant="success" now={40} label='40%' visuallyHidden />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills