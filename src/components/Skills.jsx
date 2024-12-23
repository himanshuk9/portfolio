import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS with smooth animation on scroll
    }, []);

    return (
        <>
            <section className="skills">
                <div className="skills-container">
                    <h2><i className="fa-brands fa-web-awesome fa-sm"></i> My Skills <i className="fa-brands fa-web-awesome fa-sm"></i></h2>
                    <div className="skill-set">
                        <div className="skill" data-aos="fade-up" data-aos-delay="100">
                            <img src="https://www.pinclipart.com/picdir/big/396-3965857_c-c-programming-language-logo-clipart.png" alt="C Logo" className="skill-image" />
                        </div>
                        <div className="skill" data-aos="fade-up" data-aos-delay="200">
                            <img src="https://images.vexels.com/media/users/3/166253/isolated/lists/14bc03b7b1c2c4e2656fd4c0a981cbbc-cpp-programming-language-icon.png" alt="C++ Logo" className="skill-image" />
                        </div>
                        <div className="skill" data-aos="fade-up" data-aos-delay="300">
                            <img src="http://blog.lfe.io/assets/images/posts/Python-logo.png" alt="Python Logo" className="skill-image" />
                        </div>
                        <div className="skill" data-aos="fade-up" data-aos-delay="400">
                            <img src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png" alt="HTML5 Logo" className="skill-image" />
                        </div>
                        <div className="skill" data-aos="fade-up" data-aos-delay="500">
                            <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-1024.png" alt="CSS3 Logo" className="skill-image" />
                        </div>
                        <div className="skill" data-aos="fade-up" data-aos-delay="600">
                            <img src="https://openclipart.org/image/800px/272343" alt="JavaScript Logo" className="skill-image" />
                        </div>
                        <div className="skill" data-aos="fade-up" data-aos-delay="700">
                            <img src="https://logodix.com/logo/2062444.png" alt="Bootstrap5 Logo" className="skill-image" />
                        </div>
                        <div className="skill" data-aos="fade-up" data-aos-delay="800">
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="React.js Logo" className="skill-image" />
                        </div>
                        <div className="skill" data-aos="fade-up" data-aos-delay="900">
                            <img src="https://1.bp.blogspot.com/-sqAjIvOtpXI/XYoCmqOyMwI/AAAAAAAAJig/CowR8wgEauEs-RXN2IPmLYkC7NHoHuA3gCLcBGAsYHQ/s1600/node-js-logo.png" alt="Node.js Logo" className="skill-image" />
                        </div>
                        <div className="skill" data-aos="fade-up" data-aos-delay="1000">
                            <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="Express.js Logo" className="skill-image" />
                        </div>
                        <div className="skill" data-aos="fade-up" data-aos-delay="1100">
                            <img src="https://pluspng.com/img-png/logo-mongodb-png-hundreds-of-popular-mongodb-articles-400.png" alt="MongoDB Logo" className="skill-image" />
                        </div>
                        <div className="skill" data-aos="fade-up" data-aos-delay="1200">
                            <img src="https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png" alt="SQL Logo" className="skill-image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;
