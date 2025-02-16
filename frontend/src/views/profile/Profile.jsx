import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [username, setUsername] = useState("");

  return (
    <main>
      <section className='profile-section'>
        <div className="top">
          <img 
            src="https://images.unsplash.com/photo-1739312023925-19eca8ca00aa?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Profile"
          />
          <h1>Username</h1>
        </div>

        <div className="bottom">
          <div className="bottom-top">
            <img 
              src="https://media.istockphoto.com/id/181956971/photo/couple-in-a-beautiful-landscape.webp?a=1&s=612x612&w=0&k=20&c=gD-VKqNfqC9MTyGNK_CqQTcW_NV6tAS-V-OY7NuHUQA=" 
              alt="Profile Icon"
            />
            <h1>Username</h1>
          </div>

          <div className='posts'>
              <img src="https://images.unsplash.com/photo-1739381337576-d14376e305d2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
