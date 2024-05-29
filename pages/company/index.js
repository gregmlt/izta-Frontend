import React from "react";
import CompanyPageContainer from "@/components/containers/CompanyPageContainer";
import Footer from "@/components/Footer";
import ContactContainer from "@/components/containers/ContactContainer";

function index() {
  return (
    <div>
      <CompanyPageContainer />
      <ContactContainer />
      <Footer />
    </div>
  );
}

export default index;
