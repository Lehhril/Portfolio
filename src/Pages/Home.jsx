import React from 'react'
import Threads from '../ReactBits/Threads/Threads';
import SpotlightCard from '../ReactBits/SpotlightCard/SpotlightCard';
import { Icon } from '@iconify-icon/react';
import ProjectCard from '../Components/ProjectCard';
import ContactForm from '../Components/ContactForm';

const Home = () => {
    return (
        <>
            <div className='banner-gradient'></div>
            <section className='banner-section section-space'>
                <div className="container">
                    <div className="banner-main">

                        <div className="content">
                            <a href="#" className='pre-btn'><span class="blinking-bullet"></span> Open for freelance & full-time opportunities</a>
                            <h1 className='gradient-text'>Lehhril Chaudhary<br /> Frontend Developer </h1>
                            <p>Turning designs into smooth, scalable frontend experiences.</p>
                            <div className='banner-btns'>
                                <a href="#" className='btn-primary'>Download Resume</a>
                                <a href="#" className='btn-primary btn-secondary'>Let’s Work Together</a>
                            </div>
                        </div>
                        {/* <Threads
                            amplitude={2}
                            distance={0.6}
                            enableMouseInteraction={false}
                            color={[155 / 255, 93 / 255, 229 / 255]}
                        /> */}
                    </div>
                </div>
            </section>
            <section className='about-section section-space'>
                <div className="container container-spacing">
                    <div className="section-title text-center">
                        <h2 className=''>About Me</h2>
                        <p className='post-title'>Passionate Frontend Developer crafting modern, high-performance web experiences.
                            Driven by curiosity, fueled by code — I turn ideas into smooth, scalable, user-first interfaces.
                        </p>
                    </div>
                    <div className="grid-container">
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(54, 18, 95, 0.6)">
                            <div className="card-heading">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#d9c4e3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.998 7.127Q17.48 7 18 7a4 4 0 1 1-1.027 7.867m.025-7.74L17 7a4 4 0 0 0-7.91-.85m7.908.977A4 4 0 0 1 16.465 9m.508 5.867q.027-.18.027-.367a2.5 2.5 0 0 0-2-2.45m1.973 2.817A2.5 2.5 0 0 1 14.5 17H14a4 4 0 0 0-4 4M9.09 6.15a4 4 0 0 0-4.932 4.97M9.09 6.15A4 4 0 0 1 11.465 8m-7.306 3.12A3.001 3.001 0 0 0 5 17a3 3 0 0 0 2.83-2m-3.671-3.88q.136.467.376.88m7.301-.256c-.51.491-1.383.576-2.129.157c-.746-.42-1.127-1.21-.972-1.901" color="#000" /></svg>
                                <h3>Technical Proficiency</h3>
                            </div>
                            <div className="card-details">
                                <p>
                                    Deep understanding of modern frontend technologies like React.js, JavaScript (ES6+), and Redux, enabling the development of highly interactive and scalable web interfaces.
                                </p>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(54, 18, 95, 0.6)">
                            <div className="card-heading">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#d9c4e3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.998 7.127Q17.48 7 18 7a4 4 0 1 1-1.027 7.867m.025-7.74L17 7a4 4 0 0 0-7.91-.85m7.908.977A4 4 0 0 1 16.465 9m.508 5.867q.027-.18.027-.367a2.5 2.5 0 0 0-2-2.45m1.973 2.817A2.5 2.5 0 0 1 14.5 17H14a4 4 0 0 0-4 4M9.09 6.15a4 4 0 0 0-4.932 4.97M9.09 6.15A4 4 0 0 1 11.465 8m-7.306 3.12A3.001 3.001 0 0 0 5 17a3 3 0 0 0 2.83-2m-3.671-3.88q.136.467.376.88m7.301-.256c-.51.491-1.383.576-2.129.157c-.746-.42-1.127-1.21-.972-1.901" color="#000" /></svg>
                                <h3>UI/UX-Focused Design</h3>
                            </div>
                            <div className="card-details">
                                <p>
                                    Experienced in collaborating with designers to translate wireframes into responsive, user-friendly web applications that boost user satisfaction and engagement.
                                </p>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(54, 18, 95, 0.6)">
                            <div className="card-heading">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#d9c4e3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.998 7.127Q17.48 7 18 7a4 4 0 1 1-1.027 7.867m.025-7.74L17 7a4 4 0 0 0-7.91-.85m7.908.977A4 4 0 0 1 16.465 9m.508 5.867q.027-.18.027-.367a2.5 2.5 0 0 0-2-2.45m1.973 2.817A2.5 2.5 0 0 1 14.5 17H14a4 4 0 0 0-4 4M9.09 6.15a4 4 0 0 0-4.932 4.97M9.09 6.15A4 4 0 0 1 11.465 8m-7.306 3.12A3.001 3.001 0 0 0 5 17a3 3 0 0 0 2.83-2m-3.671-3.88q.136.467.376.88m7.301-.256c-.51.491-1.383.576-2.129.157c-.746-.42-1.127-1.21-.972-1.901" color="#000" /></svg>
                                <h3>Performance Optimization</h3>
                            </div>
                            <div className="card-details">
                                <p>
                                    Skilled in improving website load times through techniques like lazy loading, code splitting, and asset optimization — delivering seamless user experiences.
                                </p>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(54, 18, 95, 0.6)">
                            <div className="card-heading">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#d9c4e3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.998 7.127Q17.48 7 18 7a4 4 0 1 1-1.027 7.867m.025-7.74L17 7a4 4 0 0 0-7.91-.85m7.908.977A4 4 0 0 1 16.465 9m.508 5.867q.027-.18.027-.367a2.5 2.5 0 0 0-2-2.45m1.973 2.817A2.5 2.5 0 0 1 14.5 17H14a4 4 0 0 0-4 4M9.09 6.15a4 4 0 0 0-4.932 4.97M9.09 6.15A4 4 0 0 1 11.465 8m-7.306 3.12A3.001 3.001 0 0 0 5 17a3 3 0 0 0 2.83-2m-3.671-3.88q.136.467.376.88m7.301-.256c-.51.491-1.383.576-2.129.157c-.746-.42-1.127-1.21-.972-1.901" color="#000" /></svg>
                                <h3>Scalable & Reusable Code</h3>
                            </div>
                            <div className="card-details">
                                <p>
                                    Creation of reusable React components and adherence to clean coding standards has led to a 30% faster development cycle and streamlined workflows.
                                </p>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(54, 18, 95, 0.6)">
                            <div className="card-heading">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#d9c4e3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.998 7.127Q17.48 7 18 7a4 4 0 1 1-1.027 7.867m.025-7.74L17 7a4 4 0 0 0-7.91-.85m7.908.977A4 4 0 0 1 16.465 9m.508 5.867q.027-.18.027-.367a2.5 2.5 0 0 0-2-2.45m1.973 2.817A2.5 2.5 0 0 1 14.5 17H14a4 4 0 0 0-4 4M9.09 6.15a4 4 0 0 0-4.932 4.97M9.09 6.15A4 4 0 0 1 11.465 8m-7.306 3.12A3.001 3.001 0 0 0 5 17a3 3 0 0 0 2.83-2m-3.671-3.88q.136.467.376.88m7.301-.256c-.51.491-1.383.576-2.129.157c-.746-.42-1.127-1.21-.972-1.901" color="#000" /></svg>
                                <h3>Customized Development</h3>
                            </div>
                            <div className="card-details">
                                <p>
                                    Tailor-made frontend solutions using Headless CMS, WordPress, and React to meet specific business needs with flexibility and future scalability.
                                </p>
                            </div>
                        </SpotlightCard>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(54, 18, 95, 0.6)">
                            <div className="card-heading">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#d9c4e3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.998 7.127Q17.48 7 18 7a4 4 0 1 1-1.027 7.867m.025-7.74L17 7a4 4 0 0 0-7.91-.85m7.908.977A4 4 0 0 1 16.465 9m.508 5.867q.027-.18.027-.367a2.5 2.5 0 0 0-2-2.45m1.973 2.817A2.5 2.5 0 0 1 14.5 17H14a4 4 0 0 0-4 4M9.09 6.15a4 4 0 0 0-4.932 4.97M9.09 6.15A4 4 0 0 1 11.465 8m-7.306 3.12A3.001 3.001 0 0 0 5 17a3 3 0 0 0 2.83-2m-3.671-3.88q.136.467.376.88m7.301-.256c-.51.491-1.383.576-2.129.157c-.746-.42-1.127-1.21-.972-1.901" color="#000" /></svg>
                                <h3>Continuous Improvement</h3>
                            </div>
                            <div className="card-details">
                                <p>
                                    Active in code reviews, learning best practices, and applying feedback to ensure top-notch code quality and maintainability in every project.
                                </p>
                            </div>
                        </SpotlightCard>

                    </div>
                </div>
            </section>
            <section className="project-section section-space">
                <div className="container container-spacing lg">
                    <div className="section-title text-center">
                        <h2 className=''>Projects</h2>
                        <p className='post-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores ullam. Earum hic mollitia quia labore exercitationem quos quisquam veniam?
                        </p>
                    </div>
                    <div className="grid-container">
                        <ProjectCard title={"React + Blockchain"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore culpa ea quia eos explicabo ipsum quae voluptates perspiciatis, sunt labore."} img={"https://picsum.photos/200/200"} href={"#"} />
                        <ProjectCard title={"React + Blockchain"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore culpa ea quia eos explicabo ipsum quae voluptates perspiciatis, sunt labore."} img={"https://picsum.photos/200/200"} href={"#"} />
                        <ProjectCard title={"React + Blockchain"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore culpa ea quia eos explicabo ipsum quae voluptates perspiciatis, sunt labore."} img={"https://picsum.photos/200/200"} href={"#"} />
                    </div>
                </div>
            </section>
            <section className="contact-section section-space">
                <div className="container container-spacing lg">
                     <div className="section-title text-center">
                        <h2 className=''>Contact</h2>
                        <p className='post-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolores ullam. Earum hic mollitia quia labore exercitationem quos quisquam veniam?
                        </p>
                    </div>
                    <div className='contact-main equal-col'>
                        <div className='contact-wrapper'>
                            <div className="contact-card">
                                <div className="contact-icon">
                                   <Icon icon="ic:outline-email" width="24" height="24"  style={{color: "#fff"}} />
                                </div>
                                <div className="contact-info">
                                    <h3>Email</h3>
                                    <a href="mailto:lehhril.w@gmail.com">lehhril.w@gmail.com</a>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-icon">
                                   <Icon icon="mingcute:map-pin-line" width="24" height="24"  style={{color: "#fff"}} />
                                </div>
                                <div className="contact-info">
                                    <h3>Location</h3>
                                    <span><a href="#">Chandigarh, India</a></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                </div>
                            </div>

                              <div className="contact-card social-card">
                                <div className="contact-info"><h3>Réseaux sociaux</h3></div>
                                <div className="social-icons">
                                    <a href="#"><Icon icon="fa-brands:github-square" width="36" height="36"  style={{color: "#fff"}} /></a>
                                    <a href="#"><Icon icon="uil:linkedin" width="36" height="36"  style={{color: "#fff"}} /></a>
                                </div>
                            </div>

                        </div>
                        <div className='form-container'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home