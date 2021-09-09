import React from 'react';

const Insights = () => {
  return (
    <section className="w-full mx-auto mb-6 mt-5 lg:mt-0 lg:mb-14 md:float-left">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-center md:justify-start flex-wrap">
        <div className="w-full section-heading cs">
          <h1>
            ACTONATE /{' '}
            <a href="/insights" style={{ color: '#DA1A22' }}>
              INSIGHTS
            </a>
          </h1>
          <div className="acto-btns bg-white ds-show">
            <a href="/insights" className="btn read-more">
              View All
              <img src="/images/btn-arrow.svg" />
            </a>
          </div>
        </div>
        <div className="ins-big-block w-full">
          <div className="ins-blocks" data-aos="zoom-out-right">
            <div className="ins-block-img">
              <img src="/images/health-care-square.png" alt="health-care" />
            </div>
            <div className="ins-block-details">
              <div className="ins-heading-mask">
                <h2 className="ins-block-heading">Healthcare</h2>
              </div>
              <p className="ins-block-body-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl
                fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. Et ac
                integer dignissim nec. Eget vitae pulvinar neque eu cras. Velit turpis justo,
                tellus, in. Egestas phasellus etiam sed.....
              </p>
            </div>
          </div>

          <div className="ins-blocks" data-aos="zoom-out-left">
            <div className="ins-block-img">
              <img src="/images/System-Software-Square.png" alt="system-software" />
            </div>
            <div className="ins-block-details">
              <div className="ins-heading-mask">
                <h2 className="ins-block-heading">System Software </h2>
              </div>
              <p className="ins-block-body-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor gravida nisl
                fringilla nec arcu est. Penatibus imperdiet id elit nec, odio in tristique. Et ac
                integer dignissim nec. Eget vitae pulvinar neque eu cras. Velit turpis justo,
                tellus, in. Egestas phasellus etiam sed.....
              </p>
            </div>
          </div>
        </div>
        <div className="acto-btns bg-white mb-show">
          <a href="/insights" className="btn read-more">
            View All
            <img src="/images/btn-arrow.svg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Insights;
