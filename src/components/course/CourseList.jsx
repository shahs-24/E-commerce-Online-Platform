import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/fetchUser";
import Styles from "./_createCourse.module.css";

const CourseList = () => {
  const { getAllCoursesApi } = useAuth();

  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const data = await getAllCoursesApi();
    setCourses(data?.courses || []);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <section className={Styles.coursePage}>
      <div className={Styles.courseHeader}>
        <h1>All Courses</h1>
        <p>Explore our available courses</p>
      </div>

      <div className={Styles.courseGrid}>
        {courses.map((course) => (
          <div className={Styles.courseCard} key={course._id}>
            <div className={Styles.courseImage}>
              <img
                src={course.thumbnail?.url}
                alt={course.name}
              />
            </div>

            <div className={Styles.courseInfo}>
              <h2>{course.name}</h2>

              <p>{course.description}</p>

              <div className={Styles.courseDetails}>
                <span>₹{course.price}</span>
                <span>{course.level}</span>
              </div>

              <Link to={`/courses/${course._id}`}>
                <button className={Styles.editButton}>
                  View Course
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseList;