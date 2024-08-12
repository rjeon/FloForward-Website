import logo from "/src/pages/images/logo.jpg"
import insta from "/src/pages/images/instagram.png"
import {useState} from "react"
import axios from "axios"

function Contact(){
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [comment, setComment]=useState("");

    const handleSubmit=(e) => {
        e.preventDefault();
        const data={
            Name: name,
            Email: email,
            Comments: comment
        }
        axios.post("https://sheet.best/api/sheets/43cbfdf9-0dfe-472e-868e-001f32116fb9", data).then((response) =>{
            console.log(response);
            setName("");
            setEmail("");
            setComment("");
        })
    }

    return(
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
                <link rel="icon" href={logo} />
            </head>

            <body>
                <p>
                    <a href="home">
                        <img src={logo} class="logo"></img>
                    </a>    
                </p>

                <div id="links">
                    <a id="linkDec" href="home">
                        Home
                    </a>
                    
                    <a id="linkDec" href="contact">
                        <b>
                            Contact
                        </b>
                    </a>

                    <a id="linkDec" href="about">
                        About Us
                    </a>

                    <a id="linkDec" href="join"> 
                        Join Us
                    </a>

                    <a id="linkDec" href="opportunity">
                        Opportunity
                    </a>
                </div>

                <center> 
                    <div id="contactus">
                        <strong>
                            Join us in a new era of supporting the next generation of young women!
                        </strong>
                    </div>    

                    <div id="socials">
                        <form id="interest" onSubmit={handleSubmit}>
                            <input type="text" id="name" placeholder="Name"
                            onChange={(e) => setName(e.target.value)} value={name}/>

                            <input type="text" id="email" placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)} value={email} />

                            <input type="text" id="comment" placeholder="Comments" 
                            onChange={(e) => setComment(e.target.value)} value={comment}/>

                            <br></br>
                    
                            <div id="newsubmission">
                                <input type="submit" id="submission"></input>
                            </div>
                        </form>

                        <a href="https://instagram.com/floforwardperiod/" target="_blank">
                            <img src={insta} class="instagramc" />
                        </a>        
                                          
                    </div>
                    <div id="socialmedia">
                            <strong>
                                Follow our social media!
                            </strong>
                    </div>      
                </center>
            </body>
        </div>
    );
}

export default Contact

