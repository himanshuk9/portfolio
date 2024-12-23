import React, { useEffect } from 'react'

function CRousal() {
    useEffect(() => {
        alert('WelCome to my portfolio !');
    }, []);
    const showalert = () => {
        alert('Thanks for visiting my portfolio !');
    }


    return (
        <>
            <section class="hero">
                <div class="hero-content">

                    <div class="hero-image">
                        <img src="./pics/npp.png" alt="Delicious Food" />
                    </div>
                    <div class="hero-text">
                        <h1>I'M<b><span> HIMANSHU VARMA</span></b></h1>
                        <h2 id='txt'>MERN STACK WEB DEVELOPER</h2>
                        <div className="homebutton">
                            <a href="https://www.linkedin.com/in/himanshu-kumawat-86a22b300"><button class="hire" onClick={showalert}><b>Hire Me</b></button></a>

                            <a href="./cv/MyResume.pdf" download="Himanshu-kumawat_vc.pdf"><button class="cv" onClick={showalert}><b>Download CV <i class="fa-solid fa-circle-down"></i></b></button></a>

                        </div>

                        <ul class="wrapper">
                            <li class="icon facebook">
                                <span class="tooltip">Facebook</span>
                                <a href="https://www.instagram.com/himanshu__mahi"><i class="fa-brands fa-square-facebook fa-xl"></i></a>
                            </li>
                            <li class="icon twitter">
                                <span class="tooltip">Linkedin</span>
                                <a href="https://www.linkedin.com/in/him
anshu-kumawat-86a22b300"><i class="fa-brands fa-linkedin fa-xl  " ></i></a>
                            </li>
                            <li class="icon instagram">
                                <span class="tooltip">Instagram</span>
                                <a href="https://instagram.com/himanshu__mahi"> <i class="fa-brands fa-square-instagram fa-xl"></i></a>

                            </li>
                            <li class="icon whatsapp">
                                <span class="tooltip">Whatsapp</span>
                                <a href="https://wa.me/9929042405"><i class="fa-brands fa-square-whatsapp fa-xl"></i></a>

                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CRousal
