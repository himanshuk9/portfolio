import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

function About() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <div className="aboutpart" id="about">
                <div className="aboutcontent" data-aos="fade-up">
                    <h1 data-aos="fade-up">About Us</h1>
                    <p data-aos="fade-up" data-aos-delay="150">
                        Hello! I'm <span>Himanshu Varma</span>, a passionate web developer with a love for creating dynamic
                        and user-friendly websites. With a background in computer science and years of experience in the industry, I strive to bring innovative solutions to complex problems. I am a self-taught programmer, intermediate in <span>C, C++, PYTHON, HTML5, CSS3, JS, BOOTSTRAP5, REACT.JS, NODE.JS, EXPRESS.JS, MONGODBMS</span>, currently learning <span>DSA</span> in C++ & <span>FULL STACK WEB DEVELOPMENT</span>.
                        When I'm not coding, you can find me exploring the great outdoors or reading a good book.
                    </p>

                    <div className="aboutbutton" data-aos="zoom-in" data-aos-delay="300">
                        <a href="https://www.linkedin.com/in/himanshu-kumawat-86a22b300">
                            <button className="talk"><b>Let's Talk</b></button>
                        </a>

                        <a href="./cv/HIMANSHURESUME.pdf" download="Himanshu-kumawat_vc.pdf">
                            <button className="resume"><b>Resume <i className="fa-solid fa-circle-down"></i></b></button>
                        </a>
                    </div>
                </div>

                <div className="aboutimg" data-aos="zoom-in" data-aos-delay="500">
                    <img src="https://static.vecteezy.com/system/resources/previews/009/300/319/original/3d-illustration-of-web-development-png.png" alt="Web Development" />
                </div>
            </div>
        </>
    );
}

export default About;
