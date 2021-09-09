import React from 'react';

export const ValuesPride = () => {
  return (
    <section className="w-full mx-auto my-14 md:h-full flex justify-start items-start md:justify-start">
      <div className="max-w-7xl mx-auto flex justify-start items-start px-4 sm:px-6 lg:px-8 md:justify-start flex-wrap">
        <h4 className="values-section-title">VALUES WE TAKE PRIDE IN</h4>
        <div className="values-blocks flex justify-start items-start lg:flex-wrap">
          <div className="vp-block">
            <div className="vp-img-container">
              <img src="/images/values-transparency.png" alt="Transparency" />
            </div>
            <div className="vp-body">
              <h4>Transparency</h4>
              <p>
                At our core, we strive for transparency with our customers and employees by being
                unrelentingly honest at all times.
              </p>
            </div>
          </div>

          <div className="vp-block">
            <div className="vp-img-container">
              <img src="/images/values-accountability.png" alt="Accountability" />
            </div>
            <div className="vp-body">
              <h4>Accountability</h4>
              <p>
                We handle mission-critical systems for our customers and being accountable for any
                lapses plays an important role in customer success.
              </p>
            </div>
          </div>

          <div className="vp-block">
            <div className="vp-img-container">
              <img src="/images/values-reliability.png" alt="Reliability" />
            </div>
            <div className="vp-body">
              <h4>Reliability</h4>
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
