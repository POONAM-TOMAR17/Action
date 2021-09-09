import React from 'react';

export const Benifits = () => {
  return (
    <section
      data-aos="fade-down"
      className="w-full mx-auto mt-10 mb-14 md:h-full flex justify-start items-center md:justify-start"
    >
      <div className="overview-text max-w-6xl mx-auto flex justify-start items-center px-4 sm:px-6 lg:px-6 md:justify-start flex-wrap">
        <div className="ben-section-heading" data-aos="fade-right">
          <h1>BENEFITS OF DIGITILIZATION</h1>
        </div>
        <div className="flex justify-flex-start flex-wrap">
          <div className="ben-block w-full md:w-3/6 p-4 lg:p-14">
            <div className="ben-image">
              <img src="/images/turnaround-times.png" alt="Turnaround Times" />
            </div>
            <div className="ben-body">
              <p>
                Improve turnaround times by reducing the need to collect, print or signed documents.
                Faster turnaround means, faster sales conversion, quicker delivery and better
                customer satisfaction
              </p>
            </div>
          </div>

          <div className="ben-block w-full md:w-3/6 p-4 lg:p-14">
            <div className="ben-image">
              <img src="/images/working-remotely.png" alt="Working Remotely" />
            </div>
            <div className="ben-body">
              <p>
                Share and collaborate across multiple locations, business units or externally with
                customers in real-time with a searchable and organized repository of information.
                This can help reduce rework and improve validation with continuous feedback.
              </p>
            </div>
          </div>

          <div className="ben-block w-full md:w-3/6 p-4 lg:p-14">
            <div className="ben-image">
              <img src="/images/track-statistic.png" alt="Track Statistic" />
            </div>
            <div className="ben-body">
              <p>
                Connect the dots by converting the stored information into actionable insights by
                running continuous analytics on the information being collected. These insights can
                help you clear the mist and identify missed opportunities.
              </p>
            </div>
          </div>

          <div className="ben-block w-full md:w-3/6 p-4 lg:p-14">
            <div className="ben-image">
              <img src="/images/working-process.png" alt="Working Process" />
            </div>
            <div className="ben-body">
              <p>
                Faster reconciliation and decision making, with data flowing in different
                departments and CXOs in the real-time. Faster decision making can result in solving
                problems for future today and a better control on the organization’s growth curve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
