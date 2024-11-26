import logo from "/src/pages/images/logo.jpg"
import aabdullah from "/src/pages/images/aabdullah.png"
import rjeon from "/src/pages/images/rjeon.png"
import rgovil from "/src/pages/images/rgovil.png"

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
                    <p id="role">
                        I am the founder, creator, media manager, and assistant web designer of FloForward!
                    </p>

                    <p id="bio">
                        I am currently a STEM student at Youngstown State University, aiming to reach my full potential 
                        and help other women do the same. I started this organization by setting up donation boxes at local
                        businesses in my area and collected over 3,000 hygiene items to donate to schools, public restrooms, 
                        shelters, and religious facilities. I am constantly launching new programs to help my community get resources, 
                        not only sanitary products, but also education and mentors to help move them in the right direction for success.
                    </p>
                </center>

                <hr color="purple" noshade />

                <h3 class="right" id="introStart">
                    Hi! Nice to meet you all, and my name is...
                </h3>
                
                <h2 class="right" id="introName"> 
                    ROBERT JEON
                </h2>

                <p>
                    <a>
                        <img src={rjeon} class="rjeon"></img>
                    </a>        
                </p>

                <center>
                    <p id="role">
                        I am the web designer and developer for FloForward!
                    </p>

                    <p id="bio">
                        I am a recent graduate from Georgia Institute of Technology, and I majored in Computer Science.
                        I love to develop websites and code programs to make life simpler. 
                        I am an avid enjoyer of Sci-Fi movies and novels, and during my free time, I enjoy watching YouTube
                        as well as playing video games. I've been with FloForward for about half a year to help support resources for 
                        women.
                    </p>
                </center>

                <hr color="purple" noshade />
                
                <h3 class="left" id="introStart">
                    Hi! Nice to meet you all, and my name is...
                </h3>
                
                <h2 class="left" id="introName"> 
                    RIA GOVIL
                </h2>

                <p>
                    <a>
                        <img src={rgovil} class="rgovil"></img>
                    </a>        
                </p>

                <center>
                    <p id="role">
                        I am a partner of FloForward!
                    </p>

                    <p id="bio">
                    From a young age I frequently traveled to India. There I saw the realities of the world: 
                    hunger, urban slums, extreme population growth. Coming from a relatively privileged background 
                    in the United States, my eyes were opened to the realities of the world, one being period poverty. 
                    I created The Paree Project and partnered with FloForward to address the global issue of period poverty. 
                    It brings me joy to imagine the impact I can create, giving women the opportunities they inherently deserve. 
                    </p>
                </center>
            </body>

        </div>
    );
}

export default About