import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useAuth } from "../../hooks/fetchUser";
import Styles from "./_createCourse.module.css";

const UpdateCourse = () => {
  const { id } = useParams();

  const {
    getCourseByIdApi,
    updateCourseApi,
  } = useAuth();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get existing course
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseByIdApi(id);

        console.log("COURSE DATA:", data);

        setCourse(data.course);
      } catch (error) {
        console.log(
          "GET COURSE ERROR:",
          error.response?.data
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  // Update course
  const handleSubmit = async (values) => {
    try {
      console.log("UPDATED VALUES:", values);

      const data = await updateCourseApi(id, values);

      console.log("COURSE UPDATED:", data);

      alert("Course updated successfully");

    } catch (error) {
      console.log(
        "UPDATE COURSE ERROR:",
        error.response?.data
      );
    }
  };

  if (loading) {
    return <h2>Loading course...</h2>;
  }

  if (!course) {
    return <h2>Course not found</h2>;
  }

  // Values shown inside Formik
  const initialValues = {
    name: course.name || "",
    description: course.description || "",
    price: course.price || "",
    estimatedPrice: course.estimatedPrice || "",
    thumbnail: course.thumbnail?.url || "",
    tags: course.tags || "",
    level: course.level || "",
    demoUrl: course.demoUrl || "",
  };

  return (
    <section className={Styles.formPage}>

      <div className={Styles.formContainer}>

        <div className={Styles.formHeader}>
          <h1>Update Course</h1>
          <p>Update the course information below</p>
        </div>

        <Formik
          initialValues={initialValues}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          <Form>

            {/* Course Name */}
            <div className={Styles.formGroup}>
              <label>Course Name</label>

              <Field
                type="text"
                name="name"
                placeholder="Enter course name"
              />
            </div>

            {/* Description */}
            <div className={Styles.formGroup}>
              <label>Description</label>

              <Field
                as="textarea"
                name="description"
                placeholder="Enter course description"
              />
            </div>

            {/* Price */}
            <div className={Styles.grid}>

              <div className={Styles.formGroup}>
                <label>Price</label>

                <Field
                  type="number"
                  name="price"
                  placeholder="Enter price"
                />
              </div>

              <div className={Styles.formGroup}>
                <label>Estimated Price</label>

                <Field
                  type="number"
                  name="estimatedPrice"
                  placeholder="Enter estimated price"
                />
              </div>

            </div>

            {/* Thumbnail */}
            <div className={Styles.formGroup}>
              <label>Thumbnail URL</label>

              <Field
                type="text"
                name="thumbnail"
                placeholder="Enter thumbnail URL"
              />
            </div>

            {/* Tags + Level */}
            <div className={Styles.grid}>

              <div className={Styles.formGroup}>
                <label>Tags</label>

                <Field
                  type="text"
                  name="tags"
                  placeholder="react, javascript, frontend"
                />
              </div>

              <div className={Styles.formGroup}>
                <label>Level</label>

                <Field
                  type="text"
                  name="level"
                  placeholder="Beginner / Intermediate / Advanced"
                />
              </div>

            </div>

            {/* Demo URL */}
            <div className={Styles.formGroup}>
              <label>Demo URL</label>

              <Field
                type="text"
                name="demoUrl"
                placeholder="Enter demo URL"
              />
            </div>

            {/* Update Button */}
            <button
              type="submit"
              className={Styles.createButton}
            >
              Update Course
            </button>

          </Form>
        </Formik>

      </div>

    </section>
  );
};

export default UpdateCourse;