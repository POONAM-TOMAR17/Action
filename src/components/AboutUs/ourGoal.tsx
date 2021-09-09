import React from 'react';

export const OurGoal = () => {
  return (
    <section className="w-full mx-auto my-14 md:h-full flex justify-start items-start md:justify-start">
      <div className="max-w-7xl mx-auto flex justify-start items-start px-4 sm:px-6 lg:px-8 md:justify-start flex-wrap">
        <div className="goal-blocks">
          <div className="our-mission-block flex justify-center items-normal flex-wrap og-block">
            <h3 data-aos="fade-right">OUR MISSION</h3>
            <div className="og-icon" data-aos="fade-down">
              &nbsp;
            </div>
            <div data-aos="fade-up">
              <div className="og-block-text">
                <p>
                  Building technology to expand the limits of human achievement while upholding the
                  ethical, social and environmental responsibility to its highest standards.
                </p>
              </div>
            </div>
          </div>
          <div className="og-block empty">&nbsp;</div>
          <div className="og-block empty">&nbsp;</div>
          <div className="our-vision-block flex justify-center items-normal flex-wrap og-block">
            <h3 data-aos="fade-left">OUR VISION</h3>
            <div className="og-icon" data-aos="fade-down">
              &nbsp;
            </div>
            <div data-aos="fade-up">
              <div className="og-block-text">
                <p>
                  To be a global technology company functioning in multiple verticals by growing and
                  nurturing relationships with our customers and employees alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
