import { Formik, Form, Field, FieldArray } from "formik";
import { useAuth } from "../../hooks/fetchUser";
import Styles from "./_createCourse.module.css";
const CreateCourse = () => {
  const { createCourseApi } = useAuth();
  const initialValues = {
    name: "",
    description: "",
    price: "",
    estimatedPrice: "",
    thumbnail: "",
    tags: "",
    level: "",
    demoUrl: "",
    benefits: [
      {
        title: "",
      },
    ],
    prerequisites: [
      {
        title: "",
      },
    ],

    courseData: [
      {
        title: "",
        description: "",
        videoUrl: "",
        videoSection: "",
        videoLength: "",
      },
    ],
  };

  const handleSubmit = async (values) => {
    console.log("VALUES SENT:", values);

    try {
      let data = await createCourseApi(values);
      console.log("CREATE COURSE:", data);
    } catch (error) {
      console.log("CREATE COURSE ERROR:", error.response?.data);
    }
  };

  return (
    <section className={Styles.container}>
      <div className={Styles.header}>
        <h1>Create New Course</h1>
        <p>Add the course details, benefits, prerequisites and lessons.</p>
      </div>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={Styles.form}>
          {/* COURSE INFORMATION */}
          <div className={Styles.card}>
            <h2 className={Styles.cardTitle}>Course Information</h2>

            <div className={Styles.formGroup}>
              <label>Course Name</label>
              <Field
                className={Styles.input}
                type="text"
                name="name"
                placeholder="Enter course name"
              />
            </div>

            <div className={Styles.formGroup}>
              <label>Description</label>
              <Field
                className={Styles.textarea}
                as="textarea"
                name="description"
                placeholder="Enter course description"
              />
            </div>

            <div className={Styles.grid}>
              <div className={Styles.formGroup}>
                <label>Price</label>
                <Field
                  className={Styles.input}
                  type="number"
                  name="price"
                  placeholder="Enter price"
                />
              </div>

              <div className={Styles.formGroup}>
                <label>Estimated Price</label>
                <Field
                  className={Styles.input}
                  type="number"
                  name="estimatedPrice"
                  placeholder="Enter estimated price"
                />
              </div>
            </div>

            <div className={Styles.formGroup}>
              <label>Thumbnail URL</label>
              <Field
                className={Styles.input}
                type="text"
                name="thumbnail"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className={Styles.grid}>
              <div className={Styles.formGroup}>
                <label>Tags</label>
                <Field
                  className={Styles.input}
                  type="text"
                  name="tags"
                  placeholder="nodejs, express, mongodb"
                />
              </div>

              <div className={Styles.formGroup}>
                <label>Level</label>
                <Field
                  className={Styles.input}
                  type="text"
                  name="level"
                  placeholder="Beginner / Intermediate / Advanced"
                />
              </div>
            </div>

            <div className={Styles.formGroup}>
              <label>Demo URL</label>
              <Field
                className={Styles.input}
                type="text"
                name="demoUrl"
                placeholder="Enter demo URL"
              />
            </div>
          </div>

          {/* BENEFITS */}
          <FieldArray name="benefits">
            {({ push, remove, form }) => (
              <div className={Styles.card}>
                <h2 className={Styles.cardTitle}>Course Benefits</h2>

                {form.values.benefits?.map((benefit, index) => (
                  <div className={Styles.arrayItem} key={index}>
                    <Field
                      className={Styles.input}
                      type="text"
                      name={`benefits.${index}.title`}
                      placeholder="Enter course benefit"
                    />

                    <button
                      className={Styles.removeButton}
                      type="button"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button
                  className={Styles.addButton}
                  type="button"
                  onClick={() => push({ title: "" })}
                >
                  + Add Benefit
                </button>
              </div>
            )}
          </FieldArray>

          {/* PREREQUISITES */}
          <FieldArray name="prerequisites">
            {({ push, remove, form }) => (
              <div className={Styles.card}>
                <h2 className={Styles.cardTitle}>Prerequisites</h2>

                {form.values.prerequisites?.map((prerequisite, index) => (
                  <div className={Styles.arrayItem} key={index}>
                    <Field
                      className={Styles.input}
                      type="text"
                      name={`prerequisites.${index}.title`}
                      placeholder="Enter prerequisite"
                    />

                    <button
                      className={Styles.removeButton}
                      type="button"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button
                  className={Styles.addButton}
                  type="button"
                  onClick={() => push({ title: "" })}
                >
                  + Add Prerequisite
                </button>
              </div>
            )}
          </FieldArray>

          {/* COURSE CONTENT */}
          <FieldArray name="courseData">
            {({ push, remove, form }) => (
              <div className={Styles.card}>
                <h2 className={Styles.cardTitle}>Course Content</h2>

                {form.values.courseData?.map((content, index) => (
                  <div className={Styles.lesson} key={index}>
                    <div className={Styles.lessonHeader}>
                      <h3>Lesson {index + 1}</h3>

                      <button
                        className={Styles.removeButton}
                        type="button"
                        onClick={() => remove(index)}
                      >
                        Remove Lesson
                      </button>
                    </div>

                    <div className={Styles.formGroup}>
                      <label>Lesson Title</label>

                      <Field
                        className={Styles.input}
                        type="text"
                        name={`courseData.${index}.title`}
                        placeholder="Enter lesson title"
                      />
                    </div>

                    <div className={Styles.formGroup}>
                      <label>Lesson Description</label>

                      <Field
                        className={Styles.textarea}
                        as="textarea"
                        name={`courseData.${index}.description`}
                        placeholder="Enter lesson description"
                      />
                    </div>

                    <div className={Styles.formGroup}>
                      <label>Video URL</label>

                      <Field
                        className={Styles.input}
                        type="text"
                        name={`courseData.${index}.videoUrl`}
                        placeholder="Enter video URL"
                      />
                    </div>

                    <div className={Styles.grid}>
                      <div className={Styles.formGroup}>
                        <label>Video Section</label>

                        <Field
                          className={Styles.input}
                          type="text"
                          name={`courseData.${index}.videoSection`}
                          placeholder="Example: JavaScript Basics"
                        />
                      </div>

                      <div className={Styles.formGroup}>
                        <label>Video Length</label>

                        <Field
                          className={Styles.input}
                          type="number"
                          name={`courseData.${index}.videoLength`}
                          placeholder="Minutes"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  className={Styles.addButton}
                  type="button"
                  onClick={() =>
                    push({
                      title: "",
                      description: "",
                      videoUrl: "",
                      videoSection: "",
                      videoLength: "",
                    })
                  }
                >
                  + Add Course Lesson
                </button>
              </div>
            )}
          </FieldArray>

          {/* SUBMIT */}
          <button className={Styles.createButton} type="submit">
            Create Course
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default CreateCourse;
