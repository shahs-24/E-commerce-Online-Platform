import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/fetchUser";
import Styles from "./_createCourse.module.css";

const UpdateCourseList = () => {
  const { getAllCoursesForAdminApi } = useAuth();
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const data = await getAllCoursesForAdminApi();
      setCourses(data?.courses || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  console.log("COURSES:", courses);

  return (
    <section className={Styles.coursePage}>
      <div className={Styles.courseHeader}>
        <h1>Update Courses</h1>
        <p>Manage and update your existing courses</p>
      </div>

      <div className={Styles.courseGrid}>
        {courses.map((course) => (
          <article className={Styles.courseCard} key={course._id}>
            <div className={Styles.courseImage}>
              <img src={course.thumbnail?.url} alt={course.name} />
            </div>

            <div className={Styles.courseInfo}>
              <h2>{course.name}</h2>

              <p>
                {course.description?.length > 100
                  ? course.description.substring(0, 100) + "..."
                  : course.description}
              </p>

              <div className={Styles.courseDetails}>
                <span>₹{course.price}</span>
                <span>{course.level}</span>
              </div>

              <button
                className={Styles.editButton}
                onClick={() =>
                  navigate(`/admin/admin-dashboard/course/update/${course._id}`)
                }
              >
                Edit Course
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default UpdateCourseList;
