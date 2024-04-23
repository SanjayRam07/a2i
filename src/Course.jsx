import './Course.css'

function Course(props) {
    return (
    <div className="box item">
        <div className="image">
            <img src={props.img} alt="" />
        </div>
        <div className="content">
            <div className="title">{props.title}</div>
            <div className="description">{props.desc}</div>
            <button>More Info</button>
        </div>
    </div>
    )
}

export default Course;