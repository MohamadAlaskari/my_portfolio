import './Container.css'


const Container = (props) => {
    return (

        <div className='page-container'>
            {props.children}
        </div>

    )
}

export default Container