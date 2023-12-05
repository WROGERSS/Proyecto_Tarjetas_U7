import React from "react";
import image1 from "../../assets/Images/home.jpg";

const Home = () => {
  return (
    <>
      <h1>Marvels</h1>;
      <div className="overflow">
        <img src={image1} alt="a wallpaper" className="card-img-top" />
      </div>
    </>
  );
};

export default Home;
