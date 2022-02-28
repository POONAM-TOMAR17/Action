import React from 'react';
import styled from 'styled-components';

const Copyrighttext = styled.p`
   {
    font-size: 12px;
    line-height: 18px;
    font-style: normal;
    font-weight: normal;
  }
`;
const navigation = {
  solutions: [
    { name: 'Home', href: '#' },
    { name: 'Mechanical', href: '#' },
    { name: 'Accreditation', href: '#' },
    { name: 'Contact Us', href: '#' }
  ],
  support: [
    { name: 'Products ', href: '#' },
    { name: 'our Labs', href: '#' },
    { name: 'Quality policy', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' }
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' }
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      name: 'Linkedin',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      )
    }

    // {
    //   name: 'GitHub',
    //   href: '#',
    //   icon: (props: any) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   )
    // },
    // {
    //   name: 'Dribbble',
    //   href: '#',
    //   icon: (props: any) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   )
    // }
  ]
};

export const Footer = () => {
  return (
    <div className="pt-15">
      <footer className=" w-full bg-black-100 relative" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="absolute inset-x-0 top-0 transform translate-y-px">
            <div className="flex justify-left max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 transform -translate-y-1/2">
              <span
                // style={{ width: '435px', height: '72px', alignItems: 'center' }}
                className="inline-flex py-3 pr-6 text-sm  pl-6 bg-gray-600 leading-6 font-normal font-montserrat tracking-wider text-black-100"
              >
                {/* <div className="w-8 mt-8 ml-0 absolute left-0 top-0  overflow-hidden inline-block">
                <div className=" h-16  bg-gray-100  rotate-45 transform origin-bottom-left"></div>
              </div> */}
                {/* <svg
                className="inset-0 ml-3 absolute left-1 mt-16"
                width="28"
                height="36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 0h427v28H0L13 0Z" fill="#BFBFBF" />
              </svg> */}
                Follow Us
                <div className="ml-2 flex space-x-2 md:order-2">
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-black-100 border hover:border-white border-black-100 rounded-full hover:text-white"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-4 mt-0.5 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </span>
            </div>
          </div>
          <div className="xl:grid xl:grid-cols-3 xl:gap-1">
            <div className="space-y-8 xl:col-span-1">
              <div className="md:grid md:grid-cols-2 md:gap-1 xs:gap-x-20 xs:mb-4 flex">
                <div>
                  <p className="text-sm font-normal text-white font-montserrat leading-6 tracking-wider uppercase">
                    Company
                  </p>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className=" text-gray-1000 font-normal font-ptsans leading-4 text-sm hover:text-white"
                        >
                          <p>{item.name}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=" md:mt-0">
                  {/* <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Support
                </h3> */}
                  <ul role="list" className="mt-9 space-y-3">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className=" text-gray-1000 font-normal leading-4 font-ptsans text-sm hover:text-white"
                        >
                          <p className="text-sm">{item.name}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-4 mr-12 xl:col-span-1 xs:mb-12">
              <p className="text-sm font-normal text-white font-montserrat leading-6 tracking-wider uppercase">
                Our Office
              </p>
              <div className="flex gap-x-3">
                <img src="/images/Location.png" alt="value-pride-1" className="object-contain" />
                <p className="text-gray-900 leading-7 font-ptsans font-normal text-sm">
                  Near Petrol Pump Vadsar Bridge (West End), GIDC Makarpura, Vadodara, Gujarat,
                  India - 390010.
                </p>
              </div>
              <div className="flex gap-x-3">
                <img src="/images/Call.png" alt="value-pride-1" className="object-contain" />
                {/* <svg
                  className="mt-2"
                  width="40"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m11.954 1.364 1.346.15c.93.103 1.645.847 1.49 1.77-.276 1.657-1.197 4.418-4.142 7.363-2.945 2.945-5.706 3.867-7.364 4.143-.923.155-1.667-.56-1.77-1.49l-.15-1.346a2 2 0 0 1 .996-1.958l.969-.553a1.796 1.796 0 0 1 2.16.29c.425.424 1.039.603 1.569.32.458-.243 1.056-.644 1.704-1.291.647-.648 1.048-1.246 1.292-1.704.282-.53.103-1.144-.322-1.568a1.796 1.796 0 0 1-.29-2.161l.554-.97a2 2 0 0 1 1.958-.995Z"
                    stroke="#BFC0C8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> */}
                <p className="text-gray-900 font-ptsans leading-4 font-normal text-sm">
                  8866064026, 9033064026, 9824389873, 9712578788
                </p>
              </div>
              <div className="flex gap-x-3">
                <img src="/images/Mail.png" alt="value-pride-1" className="object-contain" />
                <p className="text-gray-900  font-ptsans font-normal leading-4 text-sm">
                  info@actionengineers.com
                </p>
              </div>
            </div>
            <div className="space-y-8 xl:col-span-1">
              <p className="text-sm font-normal text-white font-montserrat leading-6 tracking-wider uppercase">
                Business hours
              </p>
              <div className=" flex flex-col mr-40  justify-stretch mt-5 ">
                <ul className="my-1 divide-y divide-gray-800 gap-y-6">
                  <li className="flex ">
                    <div className="flex-grow pb-2 flex items-center text-sm ">
                      <div className="flex-grow flex justify-between">
                        <div className="self-center text-sm font-ptsans font-normal text-gray-900">
                          <a className="font-medium font-ptsans" href="#0"></a>
                          Monday-Friday:
                        </div>
                        <div className="flex-shrink-0 self-start ml-2 text-sm font-ptsans font-normal text-gray-900">
                          <span className="font-medium font-ptsans">9am to 6pm</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Item */}
                  <li className="flex ">
                    <div className="flex-grow flex items-center text-sm py-1">
                      <div className="flex-grow flex justify-between">
                        <div className="self-center text-sm font-ptsans font-normal text-gray-900">
                          <a className="font-medium font-ptsans" href="#0"></a>
                          Saturday:
                        </div>
                        <div className="flex-shrink-0 self-start ml-2 text-sm font-ptsans font-normal text-gray-900">
                          <span className="font-medium font-ptsans">9am to 6pm</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex ">
                    <div className="flex-grow flex items-center text-sm py-1">
                      <div className="flex-grow flex justify-between">
                        <div className="self-center text-sm font-ptsans font-normal text-gray-900">
                          <a className="font-medium font-ptsans" href="#0"></a>
                          Sunday:
                        </div>
                        <div className="flex-shrink-0 self-start ml-2 text-sm font-ptsans font-normal text-gray-900">
                          <span className="font-medium font-ptsans">Closed</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Item */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 ">
          <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:py-4 lg:px-8">
            <Copyrighttext className=" font-ptsans  text-gray-400 xl:text-left">
              Copyright &copy; 2021 Action Engineers
            </Copyrighttext>
          </div>
        </div>
      </footer>
    </div>
  );
};
