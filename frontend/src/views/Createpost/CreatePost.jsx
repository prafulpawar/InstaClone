import React, { useState } from "react";
import axios from "axios";


function CreatePost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      console.log("User not authenticated");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:3000/posts/create", formData, {
        headers: {
          Authorization: `Bearer ${storedUser}`,
          "Content-Type": "multipart/form-data",
        },
      });
      
      console.log("Post created successfully", response.data);
      setCaption("");
      setImage(null);
      
    } catch (error) {
        console.log(error)
      console.error("Error creating post", error.response?.data?.message || error.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="create-post">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
