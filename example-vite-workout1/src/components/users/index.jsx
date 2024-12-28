import { useEffect, useState } from "react";




const Users = ()=>{
    const [usersList, setUsersList] = useState([]);
    const [pending, setPending] = useState(false);

    useEffect(()=>{
    console.log("runs on reloading");
    // fetchAllUsers();
    
    },[]);
    
    const fetchAllUsers = async()=>{
        try{
            setPending(true);
            const apiRes = await fetch('http://dummyjson.com/users');
            // console.log("apiRes", apiRes);
            const result = await apiRes.json();
            // console.log("result", result); 
            
            if(result?.users) {
                setPending(false);
                setUsersList(result?.users);
            }
            else {
                setPending(false);
                setUsersList([]);
            }
        }catch(e){
            console.log(e);
        }
    }

    // const fetchAllUsersButton = () =>{
    //     fetchAllUsers();
    // }
    if(pending) return <h3>Fetching Users Please wait...</h3>;

    // console.log("After Function users", usersList);
    
    return (
        <>
           <h2> All User Lists</h2>
           <button onClick={fetchAllUsers}>Fetch All Users</button>
           <ul>
            {
           usersList && usersList.length > 0 ? usersList.map((user, index) => <li key={user?.id}>   
            <b>{user?.firstName} {user?.lastName}</b>, age is {user?.age} and maiden is {user?.maidenName}  </li>) : <h4>No Users Found, Please retry later...</h4>
            }
           </ul>
        </>
    );
}

export default Users;