import './Courses.css'
import Course from './Course'

function courses() {
    return (
        <div className="courses">
            <div className="popular_courses">
                <div className="row1">
                    <div className="col1">
                        <h1>Popular<br></br>Courses</h1>
                        <h2>Courses on<br></br>high demand</h2>
                    </div>
                    <div className="col2">
                        <div className="horizontal-scroll-pane">
                            <div className="scroll-content">
                                <Course img="../public/java.svg" title="Java - Novice to Pro" desc="Participants with little or no programming experience learn to create Java programs. Topics include object-oriented programming concepts, terminology, syntax, and hands-on practices."/>
                                <Course title="Advanced Python Programming" desc="Whether you’re a novice or seasoned coder, this comprehensive course takes you from foundational basics to advanced proficiency. Explore Python’s core elements and build skills for real-world applications."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course_cat">
                <div className="row1">
                    <div className="col1">
                        <h1>Course<br></br>Category</h1>
                        <h2>Categories<br></br>of Courses</h2>
                    </div>
                    <div className="col2">
                        <div className="horizontal-scroll-pane">
                            <div className="scroll-content">
                                <div className="item">Item 1</div>
                                <div className="item">Item 2</div>
                                <div className="item">Item 3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default courses;