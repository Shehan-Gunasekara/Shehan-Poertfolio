const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/me.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Shehan
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Gunasekara
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Age :</span>
                    <span>24 Years</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nationality :</span>
                    <span>Sinhala</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Freelance :</span>
                    <span>Available</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Langages :</span>
                    <span>English/Sinhala</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Address :</span>
                    <span>Sri Lanka</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Phone :</span>
                    <span>+9476 368 9506</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <a
                      href="mailto:shehangunasekara2019@gmail.com"
                      className="no-style"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      shehangunasekara2019@gmail.com
                    </a>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>LinkedIn :</span>

                    <a
                      href="https://www.linkedin.com/in/shehan-gunasekara-b29638245"
                      className="no-style"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Shehan Gunasekara
                    </a>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                My Skills
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-nextjs-plain" />
              </span>
              <h4>Next JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInLeft wow">
              <span>
                <i className="devicon-react-plain" />
              </span>
              <h4>React JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>{" "}
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-flask-plain" />
              </span>
              <h4>Flask</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-nodejs-plain" />
              </span>
              <h4>Node JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-spring-plain" />
              </span>
              <h4>Spring Boot</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-nestjs-plain" />
              </span>
              <h4>Nest JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInRight wow">
              <span>
                <i className="devicon-mongodb-plain" />
              </span>
              <h4>MongoDB</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-mysql-plain" />
              </span>
              <h4>MySQL</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInRight wow">
              <span>
                <i className="devicon-postgresql-plain" />
              </span>
              <h4>PostgreSQL</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-firebase-plain" />
              </span>
              <h4>Firebase</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInRight wow">
              <span>
                <i className="devicon-amazonwebservices-plain" />
              </span>
              <h4>AWS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-docker-plain" />
              </span>
              <h4>Docker</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                My Resume
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>
                    BSc (Hons) in IT (SE)
                    <br />
                    <br />
                  </h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2021-2024</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>SLIIT</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Intern Software Engineer</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2023/May - 2023/Oct</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Axcer (PVT) LTD</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Associate Software Engineer </h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2023/Nov - 2024/Apr</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Axcer (PVT) LTD</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>
                    Software Engineer <br />
                    <br />
                  </h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2024/May - Now</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Axcer (PVT) LTD</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}

            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Software Engineer (part-time)</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2024/Aug - 2024/Nov </span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>LONOvm</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}

            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Software Engineer (part-time)</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2025/Jan - Now </span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>VISION REIMAGINE</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
