import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/fetchUser";
import Styles from "./_createCourse.module.css";

const CourseDetails = () => {
  const { id } = useParams();
  const { getCourseByIdApi } = useAuth();

  const [course, setCourse] = useState(null);

  const getCourse = async () => {
    const data = await getCourseByIdApi(id);
    setCourse(data?.course);
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  if (!course) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className={Styles.detailsPage}>
      <div className={Styles.detailsContainer}>
        <div className={Styles.detailsImage}>
          <img
            src={course.thumbnail?.url}
            alt={course.name}
          />
        </div>

        <div className={Styles.detailsInfo}>
          <h1>{course.name}</h1>

          <p className={Styles.detailsDescription}>
            {course.description}
          </p>

          <div className={Styles.detailsPrice}>
            <span>₹{course.price}</span>
            <span>Estimated: ₹{course.estimatedPrice}</span>
          </div>

          <div className={Styles.detailsLevel}>
            <strong>Level:</strong> {course.level}
          </div>

          <div className={Styles.detailsTags}>
            <strong>Tags:</strong>
            <span>{course.tags}</span>
          </div>
        </div>
      </div>

      <div className={Styles.detailsCard}>
        <h2>Benefits</h2>

        {course.benefits?.map((benefit, index) => (
          <p key={index}>✓ {benefit.title}</p>
        ))}
      </div>

      <div className={Styles.detailsCard}>
        <h2>Prerequisites</h2>

        {course.prerequisites?.map((prerequisite, index) => (
          <p key={index}>✓ {prerequisite.title}</p>
        ))}
      </div>
    </section>
  );
};

export default CourseDetails;