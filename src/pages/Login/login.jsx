import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext";

function Login() {
    const { user, setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault() 
        setUser(e.target.username.value)
    }

    return (
        <div className="login-form">
            <form name="login" onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder={user}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
