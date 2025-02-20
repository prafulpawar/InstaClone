import React, { useState, useEffect } from "react";
import "./Profile.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Posts from "./Posts";

function Profile() {
  const [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("userData")) || { username: "", posts: [] };
  });

  const navigate = useNavigate();

  function getData() {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      navigate("/login");
      return;
    }

    axios
      .post("http://localhost:3000/users/profile", {}, {
        headers: { Authorization: `bearer ${storedUser}` },
      })
      .then((res) => {
        setUserData(res.data.message || { username: "", posts: [] });
        localStorage.setItem("userData", JSON.stringify(res.data.message));
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("user");
        navigate("/login");
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="profile-container">
      <section className="profile-header">
        <img
          src="https://images.unsplash.com/photo-1739312023925-19eca8ca00aa?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHw"
          alt="Profile"
          className="profile-pic"
        />
        <h1 className="username">{userData.username}</h1>
      </section>

      <section className="posts-section">
        <Posts posts={userData.posts} />
      </section>

      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("userData");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </main>
  );
}

export default Profile;