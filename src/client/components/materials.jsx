import React from "react";
import { Link } from "react-router";
import styles from "../styles/materials.css";

function Materials(props) {
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.innerWrapper }>
                <h1 className={ styles.title }>Materials</h1>
                <h2 className={ styles.subheader }>Mathematics: Exploding Dots</h2>
                <p className={ styles.content }>
                    Thank you for a wonderful morning together of exploring the joy and wonder of EXPLODING DOTS.
                </p>
                <p className={ styles.content }>
                    I've written a little summary of our day <Link to="/exploding-dots">here</Link>. To learn more about Exploding Dots go to <a href="http://www.gdaymath.com/courses">www.gdaymath.com/courses</a> and click on Exploding Dots. To learn about how to help share Exploding Dots with one million students across the globe with the Global Math Project, go to <Link to="/exploding-dots">the summary page</Link>.
                </p>
                <h2 className={ styles.subheader }>Biology: HIV Prevention</h2>
                <p className={ styles.content }>
                    HIV remains a threat to human lives globally. But we understanding the desease. If we work together, we can reduce its threat. Bert Jacobs and Damien Solomon of HEAL International taught about HIV transmission and treatment.
                </p>
                <p className={ styles.content }>
                    All HEAL materials are available online at <a href="http://www.healinternational.org">www.healinternational.org</a>.
                </p>
                <h2 className={ styles.subheader }>Leadership: Sharing Your Values</h2>
                <p className={ styles.content }>
                   Lindy Elkins-Tanton and Turner Bohlen ran a workshop on leadership in the classroom. We believe that every teacher is a leader. During the workshop we discussed three questions:
                </p>
                <ol>
                    <li>What are your personal values?</li>
                    <li>What outcomes do you hope your students will achieve by the end of high school?</li>
                    <li>What teaching methods can you use to best achieve these outcomes?</li>
                </ol>
                <p className={ styles.content }>
                    We think its valuable for everyone to regularly spend some time thinking about these questions. If you would like to use a similar process with your community, school, or students, you can start with <a href="/documents/leadership-syllabus.pdf">our syllabus</a>.
                </p>
                <p>
                    We have collected <a href="/documents/learning-techniques.pdf">a list of student-focused teaching strategies.</a> Take a look at our list to find strategies for your classroom.
                </p>
            </div>
        </div>
    );
}

export default Materials;
