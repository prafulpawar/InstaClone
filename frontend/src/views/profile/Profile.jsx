import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 🛑 Posts ko Lazy Load karo
const Posts = lazy(() => import("./Posts"));

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
        console.log(res.data);
        setUserData(res.data.message || { username: "", posts: [] });

        // ✅ Data ko cache karo
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
    <main>
      <section className="profile-section">
        <div className="top">
          <img
            src="https://images.unsplash.com/photo-1739312023925-19eca8ca00aa?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
          />
          <h1>{userData.username}</h1>
        </div>

        <div className="bottom">
          <div className="bottom-top">
            <img
              src="https://media.istockphoto.com/id/181956971/photo/couple-in-a-beautiful-landscape.webp?a=1&s=612x612&w=0&k=20&c=gD-VKqNfqC9MTyGNK_CqQTcW_NV6tAS-V-OY7NuHUQA="
              alt="Profile Icon"
            />
            <h1>{userData.username}</h1>
          </div>

          {/* ✅ Lazy Loading Posts for Smooth UI */}
          <Suspense fallback={null}>
            <Posts posts={userData.posts} />
          </Suspense>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("userData");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </section>
    </main>
  );
}

export default Profile;
