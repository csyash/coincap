import React from "react";
import CurrencyTable from "./CurrencyTable";
import Footer from "./Footer";
import MarketStatus from "./MarketStatus";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="outer">
      <Navbar />
      <MarketStatus />
      <CurrencyTable />
      <Footer />
    </div>
  );
};

export default Layout;
