import logo from "/src/pages/images/logo.jpg"

function Home() {
    return(
        <div>
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
                    <b>
                        Home
                    </b>
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
                    Events
                </a>
            </div>
            

            <center> 
                <h2 id="missiont">
                    Our Mission:
                </h2>

                <div id="mb">
                    <p id="statement">
                        "We empower girls by providing them with access to essential hygienic supplies, resources, and opportunities, 
                        ensuring that no girl has to miss school due to lack of accessibility. We are committed to breaking stigmas and promoting education, 
                        fostering an environment where every girl can achieve her full potential without barriers. By advocating for menstrual health and 
                        education, we aim to create a world where girls can thrive with confidence and dignity."
                    </p>
                </div>    
            </center>

            </body>
        </div>
    );
}

export default Home