import React from "react";
import Data1 from "./Data1";
import Data2 from "./Data2";

function Skills() {
    const ans1 = Data1.map(function (x) {
        return (
            <div className="article-border">
                <article>
                    <img src={x.link} className="icon-skills" />
                    <div>
                        <h3 className="main-skill">{x.lang}</h3>
                        <p className="skill-exp">{x.exp}</p>
                    </div>
                </article>
            </div>)
    })

    const ans2 = Data2.map(function (x) {
        return (
            <div className="article-border">
                <article>
                    <img src={x.link} className="icon-skills" />
                    <div>
                        <h3 className="main-skill">{x.lang}</h3>
                        <p className="skill-exp">{x.exp}</p>
                    </div>
                </article>
            </div>)
    })

    return (
        <section id="skills">
            <p className="allText_p1">My Technical</p>
            <h1 className="title">Skills</h1>
            <h2 className="skill-tit dump">Programming Languages</h2>
            <div className="skill1"><div className="Programming-skills">{ans1}</div></div>
            <h2 className="skill-tit">Development Technologies</h2>
            <div className="skill2"><div className="Development-skills">{ans2}</div></div>
        </section>
    )
}

export default Skills