import logo from "/src/pages/images/logo.jpg"
import aabdullah from "/src/pages/images/aabdullah.png"
import rjeon from "/src/pages/images/rjeon.png"

function About(){
    return(
        <div class="fontsize">
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
                        Contact
                    </a>

                    <a id="linkDec" href="about">
                        <b>
                            About Us
                        </b>
                    </a>

                    <a id="linkDec" href="getinvolved">
                        Get Involved
                    </a>

                    <a id="linkDec" href="events">
                        Events
                    </a>
                </div>

                <center> 
                    <div id="bt">
                        <h2 id="teamt">
                            MEET THE TEAM
                        </h2>
                    </div>
                </center>

                <h3 class="left" id="introStart">
                    Hi! Nice to meet you all, and my name is...
                </h3>
                
                <h2 class="left" id="introName"> 
                    AUTUMN ABDULLAH
                </h2>

                <p>
                    <a>
                        <img src={aabdullah} class="aabdullah"></img>
                    </a>        
                </p>

                <center>
                    <p id="bio">
                        I am the founder, creator, media manager, and assistant web designer of Flo Forward!
                        I am currently a STEM student at Youngstown State University, aiming to reach my full potential 
                        and help other women do the same. I started this organization by setting up donation boxes at local
                        businesses in my area and collected over 3,000 hygiene items to donate to schools, public restrooms, 
                        shelters, and religious facilities. I am constantly launching new programs to help my community get resources, 
                        not only sanitary products, but also education and mentors to help move them in the right direction for success.
                    </p>
                </center>

            </body>

        </div>
    );
}

export default About