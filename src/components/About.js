import React from "react";

function About(){
    return(
        <section id="about">
            <p className="about_p1">Know more</p>
            <h1 className="title">About Me</h1>

            <div className="about-container">
                <div className="part1">
                    <h1 className="aboutHead">Who am I ?</h1>
                    <p>Hello there! I am Adithya B from Mysore, India.
I am currently pursuing my B.E. in Information Science and Technology in JSS Science And Technology University. I aspire to become a software Engineering one day. </p>
                </div>
                <div className="part2">
                    <h1 className="aboutHead">What I do</h1>

                    <div className="about-border">
                        <div><p>Web Development</p></div>
                    </div>

                    <div className="about-border">
                        <div><p>Competative Programming</p></div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default About