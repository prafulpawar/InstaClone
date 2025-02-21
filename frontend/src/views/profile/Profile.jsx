import React, { useState, useEffect } from "react";
import "./Profile.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      .post(
        "http://localhost:3000/users/profile",
        {},
        { headers: { Authorization: `bearer ${storedUser}` } }
      )
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

  function handleLike(postId) {
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser || !storedUser._id) {
      console.log("User not found in local storage");
      return;
    }

    axios
      .post("http://localhost:3000/posts/like", {
        userId: storedUser._id,
        postId,
      })
      .then((res) => {

        setUserData((prevUserData) => {
          const updatedPosts = prevUserData.posts.map((post) => {
            if (post._id === postId) {
              return { ...post, liked: !post.liked }; 
            }
            return post;
          });
          return { ...prevUserData, posts: updatedPosts };
        });
      })


      .catch((err) => {
        console.log("Error liking post:", err.response?.data?.message || err.message);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="profile-section">
      <section className="top">
        <img
          src="https://images.unsplash.com/photo-1739312023925-19eca8ca00aa?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHw"
          alt="Profile"
        />
        <h1>{userData.username}</h1>
      </section>

      <section className="bottom">
        <div className="posts">
          {userData.posts.length > 0 ? (

            userData.posts.map((post) => (

              <div key={post._id}>

                <img src={post.media} alt={post.caption} />
                <h1>{post.caption}</h1>

                <button onClick={() => handleLike(post._id)}>
                  {post.liked ? "Unlike" : "Like"}
                </button>

              </div>

            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
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