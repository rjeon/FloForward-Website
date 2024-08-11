import React, {useState} from "react";

function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstn, setFirstn] = useState("");
    const [lastn, setLastn] = useState("");

    return(
        <form>
            <h4>Login</h4>

            <input type="email" id="email" placeholder="email"
            onChange={(e) => setEmail(e.target.value)} value={email} />

            <input type="password" placeholder="password" 
            onChange={(e) => setPassword(e.target.value)} value={password}/>

            <input type="firstn" placeholder="first name" 
            onChange={(e) => setFirstn(e.target.value)} value={firstn}/>

            <input type="lastn" placeholder="last name" 
            onChange={(e) => setLastn(e.target.value)} value={lastn}/>

            <div id="newsubmission">
                <input type="submit" id="submission"></input>
            </div>
        </form>
    )
}

export default Register