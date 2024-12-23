import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with a duration of 1500ms
  }, []);

  return (
    <>
      <div className="project" id="P">
        <h2
          className="projectheading"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200" // Adding delay to the heading
        >
          <i className="fa-solid fa-shield-heart fa-sm"></i> PROJECTS{' '}
          <i className="fa-solid fa-shield-heart fa-sm"></i>
        </h2>

        <div className="projectbox">
          {/* Project 1 */}
          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <img src="picsport/portfolio-project-img.jpg" alt="Portfolio" />
            <div className="card__content">
              <p className="card__title">MY PORTFOLIO</p>
              <p className="card__description">
                My Portfolio features a collection of projects that reflect my
                commitment to delivering top-tier web solutions.
              </p>
              <button
                className="card__button"
                onClick={() =>
                  (window.location.href = 'https://your-portfolio-link.com')
                }
              >
                Live Demo
              </button>
              <button
                className="card__button secondaryb"
                onClick={() => (window.location.href = '')}
              >
                Source Code
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="card" data-aos="fade-right" data-aos-delay="200">
            <img
              src="http://www.tapsmart.com/wp-content/uploads/2017/03/RoundupHeader118.jpg"
              alt="Stopwatch"
            />
            <div className="card__content">
              <p className="card__title">STOPWATCH</p>
              <p className="card__description">
                Introducing our fully functional Stopwatch App, built with
                React! This project showcases the power of hooks and functional
                components.
              </p>
              <button
                className="card__button"
                onClick={() =>
                  (window.location.href = 'https://fullwatchstop.netlify.app/')
                }
              >
                Live Demo
              </button>
              <button
                className="card__button secondaryb"
                onClick={() => (window.location.href = '')}
              >
                Source Code
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="card" data-aos="fade-left" data-aos-delay="300">
            <img src="picsport/foodwebsite.png" alt="Food E-commerce" />
            <div className="card__content">
              <p className="card__title">FOOD ECOMMERCE</p>
              <p className="card__description">
                A web-based platform that allows users to search & order food
                items. Admin can manage orders, reviews, and users.
              </p>
              <button
                className="card__button"
                onClick={() =>
                  (window.location.href = 'https://midtownweb.vercel.app/')
                }
              >
                Live Demo
              </button>
              <button
                className="card__button secondaryb"
                onClick={() => (window.location.href = '')}
              >
                Source Code
              </button>
            </div>
          </div>

          {/* Project 4 */}
          <div className="card" data-aos="fade-up" data-aos-delay="400">
            <img
              src="https://s3-alpha.figma.com/hub/file/1359318614/ce843372-4fb2-4227-aebc-3192a7d76084-cover.png"
              alt="Chrome Extension"
            />
            <div className="card__content">
              <p className="card__title">CHROME EXTENSION</p>
              <p className="card__description">
                This Color Picker Chrome Extension is a simple tool designed to
                help users select and identify colors from any webpage.
              </p>
              <button
                className="card__button"
                onClick={() => (window.location.href = '')}
              >
                Live Demo
              </button>
              <button
                className="card__button secondaryb"
                onClick={() => (window.location.href = '')}
              >
                Source Code
              </button>
            </div>
          </div>

          {/* Project 5 */}
          <div className="card" data-aos="fade-right" data-aos-delay="500">
            <img
              src="https://ainow.id/wp-content/uploads/2023/11/image-to-text-extractor.jpg"
              alt="Abstract Text Application"
            />
            <div className="card__content">
              <p className="card__title">ABSTRACT TEXT APPLICATION</p>
              <p className="card__description">
                A web-based application developed using HTML, CSS, JS, and
                TensorFlow.js for abstract text.
              </p>
              <button
                className="card__button"
                onClick={() =>
                  (window.location.href =
                    'https://image-to-text6.netlify.app/')
                }
              >
                Live Demo
              </button>
              <button
                className="card__button secondaryb"
                onClick={() => (window.location.href = '')}
              >
                Source Code
              </button>
            </div>
          </div>

          {/* Project 6 */}
          <div className="card" data-aos="fade-left" data-aos-delay="600">
            <img
              src="https://cdn.dribbble.com/users/1018201/screenshots/14700548/food_recipe_4x.png"
              alt="Food Recipe Website"
            />
            <div className="card__content">
              <p className="card__title">FOOD RECIPE WEBSITE</p>
              <p className="card__description">
                Designed and developed a responsive food recipe website using
                HTML, CSS, and JavaScript.
              </p>
              <button
                className="card__button"
                onClick={() =>
                  (window.location.href = 'https://omnifood-two-xi.vercel.app/')
                }
              >
                Live Demo
              </button>
              <button
                className="card__button secondaryb"
                onClick={() => (window.location.href = '')}
              >
                Source Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
