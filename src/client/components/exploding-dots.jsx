import React from "react";
import styles from "../styles/exploding-dots.css";

function ExplodingDots(props) {
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.innerWrapper }>
                <h1 className={ styles.title }>Exploding Dots</h1>
                <p className={ styles.paragraph }>
                    { "Mathematics is a creative and joyous human story that can serve not only as a tool to solve technical and practical problems, but as a poetry and joy for the soul. It was an honour to share and discuss with you the mathematical story of Exploding Dots as a prime example of this." }
                </p>
                <p className={ styles.paragraph }>
                    { "During the morning we looked at 1 <—2 machines, 1 <—3 machines, 1 <—10 machines, and 1<—x machines. We saw dots explode - BOOM - and we used these machines to explain the arithmetic we learn and teach in primary school and high school." }
                </p>
                <p className={ styles.paragraph }>
                    { "We discovered that we were all taught to do mathematics from right to left and that we all do long division the same mysterious way, for example. And we saw that with Exploding Dots we can understand the algorithms we were taught, and can change our habits if we wish (add left to right if you want - that too is good), and that we can make our own choices about how to do mathematics with the power of understanding it. In particular, we saw much of advanced algebra is a repeat of primary school arithmetic. We are all together in our duty of teaching the wonderful mathematics story to our students." }
                </p>
                <h2>To Learn More</h2>
                <p className={ styles.paragraph }>
                    { "We did only a small part of the Exploding Dots story. To see the full story, go to " }
                    <a href="http://www.gdaymath.com/courses">www.gdaymath.com/courses</a>
                    { " and click on EXPLODING DOTS. There you will find everything we did and much more! There are nine chapters and you can watch videos, read text, do practice problems, and download chapters. (You received printouts of the first four chapters during the workshop. We did some material from chapters 5 and 6 as well on the day. And there are three more chapters of fun after that!)" }
                </p>
                <h2>The Global Math Project</h2>
                <p className={ styles.paragraph }>
                    { "We want to bring joyful mathematics to the world and the week of October 10 to October 17 is our inaugural Global Math Week. Learn about it here: " }
                    <a href="http://www.theglobalmathproject.org/gmw">
                        www.theglobalmathproject.org/gmw
                    </a>
                    { ". We invite teachers to register and join the world in giving some short first lesson on Exploding Dots with their students during Global Math Week and then share their experiences with the world. We hope to reach 1 million students during Global Math Week. Please consider joining Global Maths Week.  Please share the word of the Global Math Project and the website with your colleagues." }
                </p>
                <p className={ styles.paragraph }>
                    { "If you would like to be an official AMBASSADOR of the Global Math Project, please consider applying here: " }
                    <a href="http://www.theglobalmathproject.org">www.theglobalmathproject.org</a>
                    { " and click on Ambassadors. We currently have over 300 people from 60 different countries helping spread the word and helping encourage maths teachers and maths leaders to register for Global Math Week. We would be honored to have Tanzania well represented and to honour your participation." }
                </p>
                <p className={ styles.paragraph }>
                    { "We are one global community and we all want the best for our future generations. Let’s learn from each other and continue to let mathematics be both the practical tool and the thinking tool and the poetry it deserves to be." }
                </p>
                <p className={ styles.paragraph }>
                    Asante Sana
                </p>
            </div>
        </div>
    );
}

export default ExplodingDots;
