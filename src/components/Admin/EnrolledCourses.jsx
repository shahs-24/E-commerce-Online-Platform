
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/fetchUser";
import Styles from "./_enrolledCourses.module.css";

const EnrolledCourses = () => {
  const { getAllLmsCoursesApi } = useAuth();
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const data = await getAllLmsCoursesApi();
    setCourses(data?.courses || []);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
  <section className={Styles.container}>
    <h1 className={Styles.title}>Enrolled Courses</h1>

    <div className={Styles.courseGrid}>
      {courses.map((course) => (
        <main className={Styles.card} key={course._id}>
          <img
            src={course.thumbnail?.url}
            alt={course.name}
            className={Styles.thumbnail}
          />

          <div className={Styles.details}>
            <h1 className={Styles.name}>{course.name}</h1>

            <p className={Styles.description}>
              {course.description}
            </p>

            <div className={Styles.info}>
              <span>₹{course.price}</span>
              <span>{course.level}</span>
            </div>
          </div>
        </main>
      ))}
    </div>
  </section>
);
};

export default EnrolledCourses;