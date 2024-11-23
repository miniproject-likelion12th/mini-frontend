import React from "react";
import { Wrapper } from "./Wrapper";
import Banner from "./Banner";
import MenuBanner from "./MenuBanner";

const PageTemplate = ({ container }) => {
  return (
    <Wrapper>
      <Banner />
      <MenuBanner />
      {container}
    </Wrapper>
  );
};

export default PageTemplate;
