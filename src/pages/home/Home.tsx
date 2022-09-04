import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="mb-3 mt-3" style={{ textTransform: "uppercase", color: "green" }}>
        welcome to my first ShoppingCart project
      </h1>
        <br />
      <span className="mt-3 fw-bold">Looking for affordable wears, gadgets etc, affordables got you covered</span>
        <h2 className="mt-2 fw-bold" style={{ color:"red" }}>this is a test</h2>
        <br />
      <p className=" mt-3" >
        Want to stop Next.js telemetry? Here is a quick tip. You can disable it via the command line or via the
        environment file. If you are looking only at the command, you can skip this background information section and
        scroll to the disable section....
      </p>
    </div>
  );
};

export default Home;
