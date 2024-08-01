import logo from "/src/pages/images/logo.jpg"

function About(){
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
                        <b>
                            About Us
                        </b>
                    </a>

                    <a id="linkDec" href="join">
                        Join Us
                    </a>
                </div>

                <center> 
                    <div id="mission">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde eum. Eos, excepturi maiores. Nulla iusto perferendis architecto cumque ipsum expedita tempora a quas, repudiandae esse soluta adipisci id deleniti?
                    </div>    
                </center>
            </body>

        </div>
    );
}

export default About