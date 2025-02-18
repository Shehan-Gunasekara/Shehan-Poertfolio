import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
const Portfolio = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="portfolio">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow items-center"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}{" "}
        <SwiperSlide
          className="single-item swiper-slide"
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="latestposts  flex-column-mobile">
            {/* POST ITEM STARTS */}

            {/* POST ITEM ENDS */}
            {/* POST ITEM STARTS */}
            <div className="animated-layer fade-in-right-animation fadeInUp wow">
              <Link href="/blog-post" legacyBehavior>
                <a>
                  <span className="img-holder">
                    <img src="assets/blog/blog-post-2.jpg" alt="" />
                  </span>
                  <div className="content">
                    <span className="category">development</span>
                    <span className="title">
                      How Efficient Site Structure Can Boost SEO
                    </span>
                    <p>
                      ncididunt ut labore et dolore magna aliqua. Ut enim aminim
                      veniam...
                    </p>
                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="fa-regular fa-calendar" />
                        <span>21 Feb 2022</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fa-regular fa-comments" />
                        <span>34 comments</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            {/* POST ITEM ENDS */}
            {/* POST ITEM STARTS */}
            <div className="animated-layer fade-in-right-animation fadeInUp wow">
              <Link href="/blog-post" legacyBehavior>
                <a>
                  <span className="img-holder">
                    <img src="assets/blog/blog-post-3.jpg" alt="" />
                  </span>
                  <div className="content">
                    <span className="category">essentials</span>
                    <span className="title">
                      Change Management for Customer Success
                    </span>
                    <p>
                      ncididunt ut labore et dolore magna aliqua. Ut enim aminim
                      veniam...
                    </p>
                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="fa-regular fa-calendar" />
                        <span>1 Jan 2022</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fa-regular fa-comments" />
                        <span>10 comments</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            {/* POST ITEM ENDS */}
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="single-item swiper-slide flex justify-center items-center"
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="latestposts  flex-column-mobile">
            {/* POST ITEM STARTS */}

            {/* POST ITEM ENDS */}
            {/* POST ITEM STARTS */}
            <div className="animated-layer fade-in-right-animation fadeInUp wow">
              <Link href="/blog-post" legacyBehavior>
                <a>
                  <span className="img-holder">
                    <img src="assets/blog/blog-post-2.jpg" alt="" />
                  </span>
                  <div className="content">
                    <span className="category">development</span>
                    <span className="title">
                      How Efficient Site Structure Can Boost SEO
                    </span>
                    <p>
                      ncididunt ut labore et dolore magna aliqua. Ut enim aminim
                      veniam...
                    </p>
                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="fa-regular fa-calendar" />
                        <span>21 Feb 2022</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fa-regular fa-comments" />
                        <span>34 comments</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            {/* POST ITEM ENDS */}
            {/* POST ITEM STARTS */}
            <div className="animated-layer fade-in-right-animation fadeInUp wow">
              <Link href="/blog-post" legacyBehavior>
                <a>
                  <span className="img-holder">
                    <img src="assets/blog/blog-post-3.jpg" alt="" />
                  </span>
                  <div className="content">
                    <span className="category">essentials</span>
                    <span className="title">
                      Change Management for Customer Success
                    </span>
                    <p>
                      ncididunt ut labore et dolore magna aliqua. Ut enim aminim
                      veniam...
                    </p>
                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="fa-regular fa-calendar" />
                        <span>1 Jan 2022</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fa-regular fa-comments" />
                        <span>10 comments</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            {/* POST ITEM ENDS */}
          </div>
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        {/* PORTFOLIO ITEM ENDS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
