import React from 'react';

export const WorkingBenifits = () => {
  return (
    <section className="w-full mx-auto my-14 md:h-full flex justify-start items-start md:justify-start">
      <div className="max-w-7xl mx-auto flex justify-start items-start px-4 sm:px-6 lg:px-8 md:justify-start flex-wrap">
        <h4 className="cr-section-title" data-aos="zoom-in-right">
          BENEFITS OF WORKING HERE
        </h4>
        <div className="career-blocks flex justify-start items-start lg:flex-wrap">
          <div className="cr-block" data-aos="zoom-in-down">
            <div className="cr-img-container">
              <img src="/images/cr-benefits1.png" alt="Benefits 1" />
            </div>
            <div className="cr-body">
              <p>
                At our core, we strive for transparency with our customers and employees by being
                unrelentingly honest at all times.
              </p>
            </div>
          </div>

          <div className="cr-block" data-aos="zoom-in-down">
            <div className="cr-img-container">
              <img src="/images/cr-benefits2.png" alt="Benefits 2" />
            </div>
            <div className="cr-body">
              <p>
                We handle mission-critical systems for our customers and being accountable for any
                lapses plays an important role in customer success.
              </p>
            </div>
          </div>

          <div className="cr-block" data-aos="zoom-in-down">
            <div className="cr-img-container">
              <img src="/images/cr-benefits3.png" alt="Benefits 3" />
            </div>
            <div className="cr-body">
              <p>
                Promising unmeasurable reliability and delivering on it, we have been able to break
                the growth barriers every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
