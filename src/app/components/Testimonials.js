import "../styles/testimonials.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Testimonials = () => {
  return (
    <section className="section-testimonials">
      <div className="main-container">
        <div className="services-content testimonial-content">
          <h2 className="sub-headings">Testimonials</h2>
          <p className="para-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            labore molestias animi consequatur natus exercitationem, quas odit
            dolores! Asperiores debitis aliquam quibusdam!
          </p>
        </div>

        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex  align-items-center  flex-col">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/testimonial1.png"
                    className="d-block w-75 carousel-image"
                    alt="team meet pic"
                  />
                </div>
                <div>
                  <p className="para-text testimonial-para">
                    <span>“</span> Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Facilis obcaecati neque tempora rerum
                    exercitationem, sunt quia ullam voluptatum saepe assumenda
                    animi cum, at error totam corrupti, quaerat debitis earum
                    magni. <span>,,</span>
                  </p>

                  <h4 className="small-headings">Name</h4>
                  <p className="testimonial-name">CEO</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex  align-items-center  flex-col">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/testimonial2.png"
                    className="d-block w-75 carousel-image"
                    alt=""
                  />
                </div>
                <div>
                  <p className="para-text testimonial-para">
                    <span>“</span>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Facilis obcaecati neque tempora rerum
                    exercitationem, sunt quia ullam voluptatum saepe assumenda
                    animi cum, at error totam corrupti, quaerat debitis earum
                    magni.<span>,,</span>
                  </p>
                  <h4 className="small-headings">Name</h4>
                  <p className="testimonial-name">CEO</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex  align-items-center  flex-col">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/testimonial1.png"
                    className="d-block w-75 carousel-image"
                    alt="team meet pic"
                  />
                </div>
                <div>
                  <p className="para-text testimonial-para">
                    <span>“</span>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Facilis obcaecati neque tempora rerum
                    exercitationem, sunt quia ullam voluptatum saepe assumenda
                    animi cum, at error totam corrupti, quaerat debitis earum
                    magn.<span>,,</span>
                  </p>
                  <h4 className="small-headings">Name</h4>
                  <p className="testimonial-name">CEO</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span aria-hidden="true" className="left-arrow">
              {" "}
              &lt;
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="right-arrow" aria-hidden="true">
              &gt;
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
