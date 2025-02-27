import React, { useState } from "react";
import axios from "axios";

function CreatePost() {
    const [caption, setCaption] = useState("");
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            alert("Please select an image file.");
            return;
        }

        const formData = new FormData();
        formData.append("media", file);
        formData.append("caption", caption);

        try {
            const response = await axios.post("/api/posts/create", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            alert("Post Created Successfully!");
        } catch (error) {
            console.error(error);
            alert("Error in creating post.");
        }
    };

    return (
        <div>
            <h2>Create a Post</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleFileChange} required />
                <input type="text" placeholder="Enter Caption" value={caption} onChange={(e) => setCaption(e.target.value)} required />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default CreatePost;
