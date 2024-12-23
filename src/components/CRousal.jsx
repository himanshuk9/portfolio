import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

function CRousal() {
    useEffect(() => {
        AOS.init({ duration: 3000, once: true }); // Slower animation duration
    }, []);

    const showalert = () => {
        alert('Thanks for visiting my portfolio!');
    };

    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    {/* Scroll animation for hero-image */}
                    <div className="hero-image" data-aos="fade-right">
                        <img src="./pics/npp.png" alt="Delicious Food" />
                    </div>

                    {/* Scroll animation for hero-text */}
                    <div className="hero-text" data-aos="fade-left">
                        <h1>
                            I'M <b><span>HIMANSHU VARMA</span></b>
                        </h1>
                        <h2 id="txt">MERN STACK WEB DEVELOPER</h2>
                        <div className="homebutton">
                            <a href="https://www.linkedin.com/in/himanshu-kumawat-86a22b300">
                                <button className="hire" onClick={showalert}>
                                    <b>Hire Me</b>
                                </button>
                            </a>
                            <a href="./cv/MyResume.pdf" download="Himanshu-kumawat_vc.pdf">
                                <button className="cv" onClick={showalert}>
                                    <b>
                                        Download CV <i className="fa-solid fa-circle-down"></i>
                                    </b>
                                </button>
                            </a>
                        </div>

                        <ul className="wrapper">
                            <li className="icon facebook" data-aos="fade-up" data-aos-delay="500">
                                <span className="tooltip">Facebook</span>
                                <a href="https://www.instagram.com/himanshu__mahi">
                                    <i className="fa-brands fa-square-facebook fa-xl"></i>
                                </a>
                            </li>
                            <li className="icon twitter" data-aos="fade-up" data-aos-delay="600">
                                <span className="tooltip">LinkedIn</span>
                                <a href="https://www.linkedin.com/in/himanshu-kumawat-86a22b300">
                                    <i className="fa-brands fa-linkedin fa-xl"></i>
                                </a>
                            </li>
                            <li className="icon instagram" data-aos="fade-up" data-aos-delay="700">
                                <span className="tooltip">Instagram</span>
                                <a href="https://instagram.com/himanshu__mahi">
                                    <i className="fa-brands fa-square-instagram fa-xl"></i>
                                </a>
                            </li>
                            <li className="icon whatsapp" data-aos="fade-up" data-aos-delay="800">
                                <span className="tooltip">WhatsApp</span>
                                <a href="https://wa.me/9929042405">
                                    <i className="fa-brands fa-square-whatsapp fa-xl"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            
        </>
    );
}

export default CRousal;
