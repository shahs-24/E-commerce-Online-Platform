import Styles from "./_profile.module.css";
import { useAuth } from "../../hooks/fetchUser";
import { useEffect, useState } from "react";

const ProfileIndexPage = () => {
  const { user, getAllCoursesApi } = useAuth();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      let data = await getAllCoursesApi();
      console.log("COURSES:", data);
      console.log("ALL COURSES:", data.courses);
      setCourses(data.courses);
    };

    getCourses();
  }, []);

  return (
    <aside className={Styles.content}>
      <main>
        <div>
          <strong>Email</strong>
          <span>{user?.email}</span>
        </div>

        <div>
          <strong>Role</strong>
          <span>{user?.role}</span>
        </div>

        <div className={Styles.courses}>
          {courses?.map((course) => {
            return (
              <main key={course?._id}>
                <h1>{course?.name}</h1>

                <p>
                  <span>level</span>
                  <span>{course?.level}</span>
                </p>

                <p>
                  <span>price</span>
                  <span>₹{course?.price}</span>
                </p>

                <p>
                  <span>estimated price</span>
                  <span>₹{course?.estimatedPrice}</span>
                </p>

                <p>
                  <span>ratings</span>
                  <span>{course?.ratings}</span>
                </p>

                <p>
                  <span>purchased</span>
                  <span>{course?.purchased}</span>
                </p>
              </main>
            );
          })}
        </div>
      </main>
    </aside>
  );
};

export default ProfileIndexPage;
