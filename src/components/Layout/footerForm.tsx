import React from 'react';

export const FooterForm = () => {
  return (
    <div className="cs-form-container">
      <h4 data-aos="zoom-in-right">Lets build future together</h4>
      <p data-aos="zoom-in-right">
        Get the latest updates of our projects and products, just Information and no spams for sure!
      </p>
      <div
        className="form-row flex flex-wrap md:flex-nowrap justify-start items-normal"
        data-aos="zoom-in-right"
      >
        <div className="form-controls">
          <input type="email" name="email" placeholder="EMAIL" className="footer-form" />
        </div>
        <div className="acto-btns form-btn">
          <button name="submit" type="submit" className="btn">
            Submit
            <img src="/images/btn-arrow-white.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};
