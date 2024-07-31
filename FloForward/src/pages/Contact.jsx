
function Contact(){
    return(
        <div>
            <head>
                <title>FloForward</title>
                <link rel="stylesheet" href="style.css"></link>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
                <script src="https://kit.fontawesome.com/b3419c235c.js" crossorigin="anonymous"></script>
            </head>

            <body>
                <p>
                    <a href="home" target>
                        <img src="logo.jpg" class="logo"></img>
                    </a>    
                </p>

                <div id="links">
                    <a id="linkDec" href="home" target>
                        Home
                    </a>
                    
                    <a id="linkDec" href="contact" target>
                        <b>
                            Contact
                        </b>
                    </a>

                    <a id="linkDec" href="about" target>
                        About Us
                    </a>

                    <a id="linkDec" href="donate" target> 
                        Donate
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

                            <br>
                            </br>

                            <div id="newreset">
                                <input type="reset" id="clear"></input>
                            </div>

                    
                            <div id="newsubmission">
                                <input type="submit" id="submission"></input>
                            </div>
                        </form>

                        <div id="socialmedia">
                            <strong>
                                Follow our social media!
                            </strong>
                        </div>

                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </center>
            </body>
        </div>
    );
}

export default Contact

