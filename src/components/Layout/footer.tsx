import React from 'react';
import { FooterForm } from '../Layout/footerForm';
import { FooterNav } from '../Layout/footerNav';

export const Footer = () => {
  return (
    <footer className="w-full bg-black-100 relative">
      <div className="w-full flex justify-start items-center flex-wrap xs:px-4 lg:px-8 lg:container lg:mx-auto ">
        <FooterForm />
        <FooterNav />
        <div className="py-5 w-full flex flex-wrap lg:flex-nowrap text-sm font-light text-customColors-300">
          <p>© {new Date().getFullYear()} Actonate IT Solutions Pvt. Ltd. All Rights Reserved.</p>
          <div className="xs:w-full lg:w-auto flex flex-row mt-5 lg:mt-0 lg:ml-14 space-x-14">
            <a href="/sitemap" className="copyright-links">
              Sitemap
            </a>
            <a href="/privacy-policy" className="copyright-links">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
