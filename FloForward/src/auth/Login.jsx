import React, {useState} from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <form>
            <h4>Login</h4>

            <input type="email" id="email" placeholder="email"
            onChange={(e) => setEmail(e.target.value)} value={email} />

            <input type="password" placeholder="password" 
            onChange={(e) => setPassword(e.target.value)} value={password}/>

            <div id="newsubmission">
                <input type="submit" id="submission"></input>
            </div>
        </form>
    )
}


export default Login