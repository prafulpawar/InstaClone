import React, { useState } from 'react'

function Profile() {
  const [username,setUsername] = useState("");
  return (
     <main>
          <section>
                 <div>
                     <div className="top"> 
                      
                        <div> 
                            <img src="" alt="" />
                        </div>
                        <div>
                           <h1>Username</h1>
                        </div>

                     </div>



                     <div className="bottom">
                           <div className="bottom-top">
                           <div> 
                            <img src="" alt="" />
                        </div>
                        <div>
                           <h1>Username</h1>
                        </div>
                           </div>
                           <div className='posts'>
                              
                           </div>
                     </div>


                 </div>
          </section>
     </main>
  )
}

export default Profile