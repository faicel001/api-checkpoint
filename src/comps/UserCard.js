import React from 'react'
    import './c.css'

    const UserCard = ({user}) => {
	    return (
	       <div>
               <body>
<div className="container">
  <div className="card">
    <div className="box">
      <div className="content">
        <h2>{user.id}</h2>
        <h3>{user.name}</h3>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <a href='#'>Read More</a>
      </div>
    </div>
  </div>
</div>
</body>
</div>
        )}

export default UserCard