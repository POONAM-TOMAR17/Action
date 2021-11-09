import React from 'react';
import AddressForm from '../components/ContactUs/AddressForm';
import ContactForm from '../components/ContactUs/ContactForm';
import CustomerSupportContainer from '../components/ContactUs/CustomerSupportContainer';
import ImgContainer from '../components/ContactUs/ImgContainer';
import OverView from '../components/ContactUs/OverView';
import Layout from '../components/Layout/layout';
import { useWindowSize } from '../components/libs/useWindowSize';

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
