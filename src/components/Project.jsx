import React from 'react'

function Project() {
    return (
        <>
            <div class="project" id="P">


                <h2 class="projectheading"> <i class="fa-solid fa-shield-heart fa-sm "></i> PROJECTS <i
                    class="fa-solid fa-shield-heart fa-sm"></i></h2>

                <div class="projectbox">

               <div className="card">
        <img src="picsport/portfolio-project-img.jpg" alt="Portfolio" />
        <div className="card__content">
          <p className="card__title">MY PORTFOLIO</p>
          <p className="card__description">
            My Portfolio features a collection of projects that reflect my commitment to delivering top-tier web solutions.
          </p>
          <button
            className="card__button"
            onClick={() => window.location.href = 'https://image-to-text6.netlify.app/'}
          >
            Live Demo
          </button>
          <button
            className="card__button secondaryb"
            onClick={() => window.location.href = ''}
          >
            Source Code
          </button>
        </div>
      </div>

      {/* Project 2: Stopwatch */}
      <div className="card">
        <img src="http://www.tapsmart.com/wp-content/uploads/2017/03/RoundupHeader118.jpg" alt="Stopwatch" />
        <div className="card__content">
          <p className="card__title">STOPWATCH</p>
          <p className="card__description">
            Introducing our fully functional Stopwatch App, built with React! This project showcases the power of hooks and functional components.
          </p>
          <button
            className="card__button"
            onClick={() => window.location.href = 'https://image-to-text6.netlify.app/'}
          >
            Live Demo
          </button>
          <button
            className="card__button secondaryb"
            onClick={() => window.location.href = ''}
          >
            Source Code
          </button>
        </div>
      </div>

      {/* Project 3: Food E-commerce */}
      <div className="card">
        <img src="picsport/foodwebsite.png" alt="Food E-commerce" />
        <div className="card__content">
          <p className="card__title">FOOD ECOMMERCE</p>
          <p className="card__description">
            A web-based platform that allows users to search & order food items. Admin can manage orders, reviews, and users.
          </p>
          <button
            className="card__button"
            onClick={() => window.location.href = 'https://image-to-text6.netlify.app/'}
          >
            Live Demo
          </button>
          <button
            className="card__button secondaryb"
            onClick={() => window.location.href = ''}
          >
            Source Code
          </button>
        </div>
      </div>

      {/* Project 4: Chrome Extension */}
      <div className="card">
        <img src="https://s3-alpha.figma.com/hub/file/1359318614/ce843372-4fb2-4227-aebc-3192a7d76084-cover.png" alt="Chrome Extension" />
        <div className="card__content">
          <p className="card__title">CHROME EXTENSION</p>
          <p className="card__description">
            This Color Picker Chrome Extension is a simple tool designed to help users select and identify colors from any webpage.
          </p>
          <button
            className="card__button"
            onClick={() => window.location.href = 'https://image-to-text6.netlify.app/'}
          >
            Live Demo
          </button>
          <button
            className="card__button secondaryb"
            onClick={() => window.location.href = ''}
          >
            Source Code
          </button>
        </div>
      </div>

      {/* Project 5: Abstract Text Application */}
      <div className="card">
        <img src="https://ainow.id/wp-content/uploads/2023/11/image-to-text-extractor.jpg" alt="Abstract Text Application" />
        <div className="card__content">
          <p className="card__title">ABSTRACT TEXT APPLICATION</p>
          <p className="card__description">
            A web-based application developed using HTML, CSS, JS, and TensorFlow.js for abstract text.
          </p>
          <button
            className="card__button"
            onClick={() => window.location.href = 'https://image-to-text6.netlify.app/'}
          >
            Live Demo
          </button>
          <button
            className="card__button secondaryb"
            onClick={() => window.location.href = ''}
          >
            Source Code
          </button>
        </div>
      </div>

      {/* Project 6: Food Recipe Website */}
      <div className="card">
        <img src="https://cdn.dribbble.com/users/1018201/screenshots/14700548/food_recipe_4x.png" alt="Food Recipe Website" />
        <div className="card__content">
          <p className="card__title">FOOD RECIPE WEBSITE</p>
          <p className="card__description">
            Designed and developed a responsive food recipe website using HTML, CSS, and JavaScript.
          </p>
          <button
            className="card__button"
            onClick={() => window.location.href = 'https://image-to-text6.netlify.app/'}
          >
            Live Demo
          </button>
          <button
            className="card__button secondaryb"
            onClick={() => window.location.href = ''}
          >
            Source Code
          </button>
        </div>
      </div>

                </div>
            </div>

        </>
    )
}

export default Project
