import React from 'react';

const CustomerSupportContainer = () => {
  return (
    <section className="w-full flex justify-start items-center flex-wrap xs:mt-5 lg:mt-8 mb-5 relative">
      <div className="w-full h-full xs:absolute xs:flex items-center justify-center lg:block lg:relative z-1">
        <img
          src="/images/customersupport.jpg"
          alt="about-us"
          className="w-full h-full object-cover"
        />

        {/* <div className="absolute top-0 right-0 w-full h-full bg-black bg-opacity-60">
          <img src="/images/Union.png" alt="about-us" className="object-cover" />
        </div> */}
      </div>
      <div className="relative lg:absolute w-full lg:h-full flex items-center justify-start lg:top-0 lg:left-0">
        <div className="w-full flex items-center justify-between xs:px-4 lg:px-8 xs:py-8 lg:py-0 mb-5 lg:container lg:mx-auto">
          <div className="w-full flex items-center xs:flex-wrap xs:space-y-8 lg:justify-between lg:flex-nowrap lg:space-y-0">
            <div className="xs:w-full lg:flex lg:pr-8 flex flex-wrap items-end justify-between">
              <p className="text-5xl font-medium text-white leading-10">
                Looking for customer support?
              </p>
              <div className="flex items-center">
                <svg width="19" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.107.341a3.264 3.264 0 0 0-1.163.126l-1.38.409a4.398 4.398 0 0 0-3.01 3.076c-.865 3.277.123 7.156 2.695 11.522 2.567 4.36 5.493 7.13 8.797 8.035a4.478 4.478 0 0 0 4.22-1.028l1.051-.975a3.181 3.181 0 0 0 .401-4.2l-1.517-2.061a3.266 3.266 0 0 0-3.567-1.18l-2.374.712c-.1.029-.338-.107-.546-.286v-.002c-.37-.321-.883-.97-1.43-1.9v-.001c-.588-.998-.839-1.65-.94-2.036-.1-.386-.076-.433-.061-.563a.276.276 0 0 1 .091-.173l.001-.001 1.77-1.62a3.172 3.172 0 0 0 .75-3.655L8.826 2.21A3.246 3.246 0 0 0 6.107.34Zm-.126 1.746c.535.04 1.029.361 1.254.853L8.304 5.27a1.398 1.398 0 0 1-.339 1.636l-1.77 1.618a2.03 2.03 0 0 0-.65 1.269v.001c-.015.128-.05.605.107 1.201.155.596.477 1.385 1.123 2.482h.001c.603 1.023 1.173 1.8 1.79 2.336h.001c.2.174 1.04.979 2.183.645l.003-.001 2.385-.714a1.512 1.512 0 0 1 1.653.54l1.518 2.062c.43.585.354 1.381-.183 1.88l-1.05.975a2.757 2.757 0 0 1-2.568.622c-2.671-.731-5.315-3.098-7.75-7.235-2.44-4.142-3.203-7.568-2.513-10.188.228-.864.927-1.582 1.815-1.844l1.38-.41a1.51 1.51 0 0 1 .54-.057Z"
                    fill="#fff"
                  />
                </svg>
                <p className="text-3xl font-semibold ml-3 text-white">Call us</p>
              </div>
              <div className="flex items-center">
                <svg width="24" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.125.667A3.805 3.805 0 0 0 .333 4.458v11.084a3.805 3.805 0 0 0 3.792 3.791h15.75a3.805 3.805 0 0 0 3.792-3.791V4.458A3.805 3.805 0 0 0 19.875.667H4.125Zm.567 1.75h14.616L12 6.367l-7.308-3.95Zm-2.188.805 9.08 4.908a.875.875 0 0 0 .832 0l9.08-4.908c.26.343.42.767.42 1.236v11.084a2.021 2.021 0 0 1-1.75 2.013V7.516a.875.875 0 0 0-1.29-.769L12 10.464 5.124 6.747a.875.875 0 0 0-1.29.77v10.038a2.021 2.021 0 0 1-1.75-2.013V4.458c0-.469.16-.893.42-1.236Zm3.08 5.763 6 3.244a.875.875 0 0 0 .832 0l6-3.244v8.598H5.584V8.985Z"
                    fill="#fff"
                  />
                </svg>
                <p className="text-3xl ml-3 font-semibold text-white">Mail us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportContainer;
