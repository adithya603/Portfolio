import React from "react";

function Front(){
    const linkedin = "https://www.linkedin.com/in/adithya-b-47b612229/"
    const github = "https://github.com/adithya603"

    const handleLinkedInClick = () => {
        window.location.href = `https://www.linkedin.com/in/adithya-b-47b612229/`;
    };

    const handleResume = () => {
        window.location.href = `https://drive.google.com/file/d/1teN2A-Fhra8GuXhQdbNLRwzvTYET4JlK/view?usp=drive_link`;
    };

    return(
        <section id="front">
            <div className="text_area">
                <p className="front_p1">Hey there! I'm</p>
                <p className="titleMain"><span className="adi">Adithya B</span></p>
                <p className="front_p2"><span className="mern">MERN</span> stack Web Developer</p>

                <div className="btn-container">
                    <button  className="btn btn-1 frontal-links" onClick={handleResume}>
                        Resume
                    </button>
                    <button className="btn btn-1 frontal-links" onClick={handleLinkedInClick}>
                        Linkedin
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Front