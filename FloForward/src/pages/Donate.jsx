function Donate(){
    return(
        <div>
            <head>
                <title>FloForward</title>
                <link rel="stylesheet" href="style.css"></link>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            </head>

            <body>
                <p>
                    <a href="home">
                        <img src="logo.jpg" class="logo"></img>
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

                    <a id="linkDec" href="donate">
                        <b> 
                            Donate
                        </b>
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

export default Donate