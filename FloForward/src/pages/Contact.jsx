import logo from "/src/pages/images/logo.jpg"
import insta from "/src/pages/images/instagram.png"

function Contact(){
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
                </div>

                <center> 
                    <div id="contactus">
                        <strong>
                            Join us in a new era of supporting the next generation of young women!
                        </strong>
                    </div>    

                    <div id="socials">
                        <form id="interest">
                            <input type="text" id="name" placeholder="Name"></input>
                            <input type="text" id="email" placeholder="Email"></input>
                            <input type="text" id="comment" placeholder="Comments"></input>

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

