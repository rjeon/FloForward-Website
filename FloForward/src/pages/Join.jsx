import logo from "/src/pages/images/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

function Join(){
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
                        Contact
                    </a>

                    <a id="linkDec" href="about">
                        About Us
                    </a>

                    <a id="linkDec" href="join">
                        <b> 
                            Join Us
                        </b>
                    </a>
                </div>

                <center> 
                    <div id="mp">
                        <h2 id="participatet"> 
                            Ways to Participate
                        </h2>
                    </div>    

                    <p id="participationd">
                        I have seasonal drop boxes and drives in the Trumbull County, Ohio area and deliver period 
                        packages to various locations, schools, religious facilities, public restrooms, and internationally! 
                        I send letters and notes with my packages!
                    </p>

                    <br />

                    <p id="options">
                        Options:
                    </p>
                </center>

                <ul>
                    <li id="participation"> Send products through Amazon Wishlist! </li>
                    <li id="participation"> Write a letter or a note using this Google form! I can print your notecards and include them with shipments going everywhere! </li>
                    <li id="participation"> Make a post about FloForward content and tag FloForward on Instagram to be added to our story and highlights! </li>
                </ul>        

                <a href="https://instagram.com/floforwardperiod/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>     
            </body>
        </div>
    );
}

export default Join