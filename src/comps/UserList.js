import Axios from 'axios';
import React, { useEffect, useState } from 'react'
	import { Spinner } from 'react-bootstrap';
	import UserCard from './UserCard';
	

	const UserList = () => {
	    const [users, setUsers] = useState([]);
	    const [loading, setLoading] = useState(true)
	    useEffect(() => {
            Axios
	        .get('https://jsonplaceholder.typicode.com/users')
	        .then((response )=>{
                setUsers(response.data)
                setLoading(false)
            })
	        .catch(
	            (error)=>console.log(error)
	        );
	    }, [])
	    if (loading) {
	      return  <Spinner animation="border" variant="danger" />
	    }
	    return (
	        <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}} >
	          {
	              users.map(
	                  (user,i)=> <UserCard key={i} user={user}/>
	              )
	          }  
	        </div>
	    )
	}
	

	export default UserList
