import logo from "/src/pages/images/logo.jpg"

function Events() {
    return(
        <div class="fontsize">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <head>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
                <link rel="icon" href={logo}/>
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

                <a id="linkDec" href="getinvolved">
                    Get Involved
                </a>

                <a id="linkDec" href="events">
                    <b>
                        Events
                    </b>
                </a>
            </div>
            

            <center> 
                <h2 id="missiont">
                    Coming Soon!
                </h2>  
            </center>

            </body>
        </div>
    );
}

export default Events