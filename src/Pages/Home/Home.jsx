import { React, useContext } from "react";
import Introduction from "../../Components/Intro/Introduction";
import ResumeContext from "../../Context/ResumeContext";
import BuilderArea from "../BuilderArea";
import Theme1 from "./../../Theme/Theme1/Theme1";
const Home = () => {
  const { showComponent, themeData, componentRef } = useContext(ResumeContext);

  return (
    <>
      {!showComponent && <Introduction />}
      {showComponent && (
        <BuilderArea
          theme={<Theme1 componentRef={componentRef} themeData={themeData} />}
        />
      )}
    </>
  );
};

export default Home;
