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
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src={"../assets/img/profile-img.jpg"} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3> Marketing &amp; Publicity Chairperson</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
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
                        <i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>samyakvora014@gmail.com</span>
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

        <section id="facts" className="facts">
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
        </section>

        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row skills-content">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="progress">
                  <span className="skill">
                    PHP <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    WordPress/CMS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Photoshop <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
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
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>Alex Smith</h4>
                  <p>
                    <em>
                      Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print
                      marketing material from initial concept to final, polished deliverable.
                    </em>
                  </p>
                  <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Master of Fine Arts &amp; Graphic Design</h4>
                  <h5>2015 - 2016</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <p>
                    Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                    nerada porti sand markend
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                  <h5>2010 - 2014</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <p>
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates
                    asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila
                  </p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Senior graphic design specialist</h4>
                  <h5>2019 - Present</h5>
                  <p>
                    <em>Experion, New York, NY </em>
                  </p>
                  <ul>
                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Graphic design specialist</h4>
                  <h5>2017 - 2018</h5>
                  <p>
                    <em>Stepping Stone Advertising, New York, NY</em>
                  </p>
                  <ul>
                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
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
