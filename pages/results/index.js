import React from "react";
import CompanySearchResultsContainer from "@/components/containers/CompanySearchResultsContainer";
import Footer from "@/components/Footer";
import ContactContainer from "@/components/containers/ContactContainer";

function index() {
  return (
    <div>
      <CompanySearchResultsContainer />
      <ContactContainer />
      <Footer />
    </div>
  );
}

export default index;
