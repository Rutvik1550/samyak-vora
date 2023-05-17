import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <span href="index.html">Samyak Vora</span>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/vora_samyak" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://www.instagram.com/samyak_vora/" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://www.quora.com/profile/Samyak-Vora-1" className="google-plus">
                <i className="xfa-brands fa-quora"></i>
              </a>
              <a href="https://www.linkedin.com/in/samyakvora/" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <Header />
      </div>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
              <p>
                Samyak is an aspiring Project Manager with a strong interest in Business and Management along with a passion for Technology with a
                computer engineering background. Hardworking individual who sets foundational goals. Once reached a benchmark, raise the bar and
                continue striving for greater heights. Always Learning.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src={"../assets/img/profile-img.jpg"} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3> Marketing &amp; Publicity Chairperson</h3>
                <p className="fst-italic">Publicity and Marketing Chair at International Student Advisory Board, New York University.</p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 Nov 1998</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>http://samyakvora.com/</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>samyakvora014@gmail.com</span>
                      </li>
                      {/* <li>
                        <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
                  incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus
                  itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="facts" className="facts">
          <div className="container">
            <div className="section-title">
              <h2>Facts</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p>
                    <strong>Happy Clients</strong> consequuntur quae
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p>
                    <strong>Projects</strong> adipisci atque cum quia aut
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="count-box">
                  <i className="bi bi-headset"></i>
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                  <p>
                    <strong>Hours Of Support</strong> aut commodi quaerat
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                <div className="count-box">
                  <i className="bi bi-people"></i>
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                  <p>
                    <strong>Hard Workers</strong> rerum asperiores dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Technical &amp; Soft Skills</h2>
              <p>
                R Studio, Jupyter Notebook, Tableau, Power Bi, Microsoft Project, Jira, Asana, ClickUp, Python, Agile Methodologies, SWOT Analysis,
                Product Roadmap, Analytical skills, UX Experience, Negotiation, SEO, Leadership, Strong Communication, Problem-Solving, Budget
                Management, Digital Marketing, Google Certified Project Management Professional Certification (2/6).
              </p>
            </div>

            {/* <div className="row skills-content">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="progress">
                  <span className="skill">
                    PHP <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    WordPress/CMS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Photoshop <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>New York University</h4>
                  <h5>December 2023</h5>
                  <p>
                    <em>Master of Science, Management of Technology (Project Management Track) / Graduate Scholarship</em>
                  </p>
                  <p>Relevant coursework: Project Management, Quality Management - Six Sigma, Business Analytics, Data Visualization, Finance.</p>
                </div>
                <div className="resume-item">
                  <h4>Gujarat Technological University</h4>
                  <h5>July 2021</h5>
                  <p>
                    <em>Bachelor of Engineering, Computer Engineering / MYSY Scholarship</em>
                  </p>
                  {/* <p>
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates
                    asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila
                  </p> */}
                </div>

                <h3 className="resume-title">PROJECT WORK DETAILS</h3>
                <div className="resume-item">
                  <h4>College Canteen Food Ordering System / Final year Undergraduate Project</h4>
                  <h5>July 2020</h5>
                  <ul>
                    <li>Developed a cross-platform application for contactless food ordering, improving safety during pandemics.</li>
                    <li>Acted as a liaison between internal teams, ensuring the success of cross-functional initiatives.</li>
                    <li>Utilized Android/iOS platforms and employed analytical and problem-solving skills to create an efficient system.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Strategy and Management | Tata Consultancy Services</h4>
                  <h5>August 2020 - November 2020</h5>
                  <ul>
                    <li>Conducted analysis on innovative Common Service Centers (CSCs) to enhance digital service delivery.</li>
                    <li>
                      Identified strategies to bridge the digital divide, expanding the reach of public services. Articulated and documented project
                      plans through all stages, ensuring milestones were met and coordinated scaling operations for expanded deliveries.
                    </li>
                    <li>Utilized critical thinking to break down problems, evaluate solutions, and make informed decisions.</li>
                    <li>Collaborated with the core team of TCS, implementing effective solutions and honing leadership skills.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Real-Time Automated Decision-Making System / Data Engineering Graduate Project</h4>
                  <h5>March 2022</h5>
                  <ul>
                    <li>Created a Python application to aid traders and investors in obtaining a real-time trading strategy.</li>
                    <li>
                      We computed the return as a fractional increase/decrease using Bollinger band theory. During testing, trading US money over 10
                      other currencies, we achieved a +62.5% return on investment compared to a (-2.97%) return without the system.
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Mobile Phone Consumer Analysis / Data Visualization Graduate Project</h4>
                  <h5>March 2022</h5>
                  <ul>
                    <li>Developed a platform for mobile phone consumer analysis using Tableau, Power Bi, R Studio, and Python.</li>
                    <li>Created visualized dashboards to compare different phones and provide personalized recommendations.</li>
                    <li>Aligned with our internal IT team to deliver system solutions</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Business Development Intern | Infiraise</h4>
                  <h5>May 2021 - November 2021</h5>
                  <ul>
                    <li>
                      Conducted stakeholder meetings, to define & maintain roadmap, resulting in successful implementation & increased investor
                      interest.
                    </li>
                    <li>Managed client accounts, ensuring smooth onboarding and fostering strong relationships.</li>
                    <li>Developed product management skills by delivering multiple successful products simultaneously.</li>
                    <li>Gained insights into program management by handling four projects concurrently.</li>
                    <li>Continuously improved program, leveraging customer feedback for upstream enhancements.</li>
                    <li>
                      Managed social media platforms, enhancing business strengths, meeting customer needs, and achieving a 93% satisfaction rate.
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Manager | Vogue Commercial Ventures</h4>
                  <h5>March 2020 - March 2021</h5>
                  <ul>
                    <li>Monitored daily activities and mentored a team of 10 associates, demonstrating effective leadership.</li>
                    <li>Initiated online transition, leading to a 37% YoY sales increase through strategic risk management.</li>
                    <li>
                      Identified Key Performance Indicators and partnered with Business Analytics to develop reporting suite, tracking progress
                      effectively.
                    </li>
                    <li>
                      Evaluated manufacturing operations and implemented budget restructuring for better financial control with budget management.
                    </li>
                    <li>
                      Established connections with 110+ medical stores during the Covid-19 crisis, ensuring efficient supply with crisis management
                      skills.
                    </li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Digital Marketing Intern | MarkInfinity</h4>
                  <h5>March 2019 - March 2020</h5>
                  <ul>
                    <li>Created cost-effective marketing strategies under critical financing, optimizing campaign performance.</li>
                    <li>Developed digital footprints for multiple clients, resulting in a 23% increase in customer base.</li>
                    <li>Demonstrated expertise in digital marketing, leveraging various online channels for success.</li>
                  </ul>
                </div>

                <h3 className="resume-title">LEADERSHIP AND EXTRACURRICULAR ACTIVITY</h3>
                <div className="resume-item">
                  <h4>Marketing & Publicity Chair | ISAB (International Student Advisory Board), New York University May 2022 - Present</h4>
                  <h5>May 2022 - Present</h5>
                  <ul>
                    <li>Providing various unique experiences for all undergraduate and graduate international students at NYU.</li>
                    <li>Demonstrated organizational and time-management skills by organizing multiple successful events, with managing my master's study.</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Core Committee Member and Treasurer | Silver Oak University IEEE SB</h4>
                  <h5>January 2019 - March 2021</h5>
                  <ul>
                    <li>Introduced internal controls to monitor critical areas of finance and devised many corrective actions to address risks or deficiencies.</li>
                    <li>Drafted 18 treasury reports and did cash management by overseeing the reconciliation of banking activity during 2019-2020.</li>
                    <li>With my project management skills, I with my team effectively and efficiently completed more than 50 projects/events.</li>
                    <li>Planned meetings to carry out agreed actions & successfully organized events with my team holding up to 3500+ participants/event.</li>
                    <li>Provided clear updates on program status (Event updates) and implemented recovery plans at all levels.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Volunteer Member | IEEE, IEEE WIE, and IEEE Consultant Network</h4>
                  <h5>May 2017 - January 2021</h5>
                  <ul>
                    <li>Managed all aspects of the branch, including membership drive, circulation, marketing, advertising, and new skills development.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Samyak Vora</span>
            </strong>
          </div>
          {/* <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div> */}
        </div>
      </footer>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/typed.js/typed.min.js"></script>
      <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      <script src="assets/js/main.js"></script>
    </>
  );
};

export default Home;
