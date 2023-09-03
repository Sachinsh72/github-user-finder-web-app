import { useEffect, useRef, useState } from "react";
import UserContainer from "../UserContainer";
import Loading from "../Loading";

function Users(){

    const [users, setUsers] = useState([]);
    const[loading, setLoading] = useState(true);

    let baseUrl = "https://api.github.com/users";

    const user = useRef('');

    async function allUsers(){
        setLoading(true);
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log("alluser call: ",data);
        setUsers(data)
        setLoading(false);
    }
   
    async function findUser(){
        // console.log(user.current.value);
        setLoading(true)
        if(user.current.value !==''){
            setUsers("")
            const res = await fetch(baseUrl+"/"+user.current.value);
            const data = await res.json();
            console.log(data);
            setUsers(()=>[data]);
            user.current.value = "";
        }else{
            allUsers();
        }
        setLoading(false)
    }

    useEffect(()=>{
        allUsers();
    },[user,setUsers]);

    return(
        <div>
            <div className="flex justify-center items-center h-12 my-5">
                <input 
                    type="text" 
                    placeholder="Search github username.." 
                    className="h-full md:w-2/3 px-2 font-semibold border-2 bg-slate-200"
                    ref={user}
                />
                <button onClick={findUser} className="bg-red-500 text-white hover:bg-red-700 px-5 font-semibold  h-full">Search</button>
                
            </div>
            
            { loading ? <Loading/> : <UserContainer users={users}/>}
        </div>
    )
}

export default Users;