import CustomerSupportContainer from '../components/ContactUs/CustomerSupportContainer';
import React from 'react';
import ContactForm from '../components/ContactUs/ContactForm';
import ImgContainer from '../components/ContactUs/ImgContainer';
import OverView from '../components/ContactUs/OverView';
import Layout from '../components/Layout/layout';
import { useWindowSize } from '../components/libs/useWindowSize';
import AddressForm from '../components/ContactUs/AddressForm';

const ContactUs = () => {
  const [width] = useWindowSize();
  return (
    <Layout>
      <ImgContainer />
      <OverView />
      <ContactForm isMobile={width < 1025} />
      <CustomerSupportContainer />
      <AddressForm />
    </Layout>
  );
};

export default ContactUs;
