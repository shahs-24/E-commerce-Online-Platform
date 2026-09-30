import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./_admin.module.css";

const AdminSidebar = () => {
  const [courseOpen, setCourseOpen] = useState(false);

  return (
    <div className={Styles.sidebarMenu}>

      <NavLink
        to="/admin/admin-dashboard"
        className={Styles.sidebarLink}
      >
        Users
      </NavLink>

      <button
        type="button"
        className={Styles.courseButton}
        onClick={() => setCourseOpen(!courseOpen)}
      >
        Courses
        <span>{courseOpen ? "▲" : "▼"}</span>
      </button>

      {courseOpen && (
        <div className={Styles.courseMenu}>

          <NavLink
            to="/admin/admin-dashboard/course/create"
            className={Styles.courseLink}
          >
            Create Course
          </NavLink>

          <NavLink
            to="/admin/admin-dashboard/course/update"
            className={Styles.courseLink}
          >
            Update Course
          </NavLink>

        </div>
      )}

    </div>
  );
};

export default AdminSidebar;