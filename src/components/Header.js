import { PrismicText } from "@prismicio/react";

/**
 * Homepage header component
 */
export const Header = ({ image, headline, description }) => (
  <div className="home">
    
    <section className="bg-main">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={image.url}  className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 text-light fw-bold lh-1 mb-3">{headline}</h1>
                    <p className="lead text-light">{description}</p>
                    <div className="text-light d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="mainbutton btn btn-primary btn-lg px-4 me-md-2">Read More</button>
                    </div>
                </div>
                </div>
            </div>
            </section>
  </div>
);
