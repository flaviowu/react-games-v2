import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import { api } from "../../util/api/api"

function Login() {
    const { user, setUser, profile, setProfile } = useContext(UserContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const accountId = e.target.username.value;
        
        const loadAccount = async (id) => {
            const response = await api.buildApiGetRequest(api.readAccountByIdUrl(id))
            const result = await response.json()
            console.log(result)
            setUser(result)
        }

        loadAccount(accountId)
    }

    return (
        <div className="login-form">
            <form name="login" onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="id da conta"/>
                <button type="submit">Login</button>
            </form>
            {user? <div> {user.profiles.map(profile => {
                return <img key={profile.id} src={profile.image} alt={profile.name} onClick={()=> {setProfile({...profile})}}></img>
            })} </div> : ('')

            }

        </div>
    )
}

export default Login
