import React from "react";
import image1 from "../../assets/Images/home.jpg";
import "../Pages/home.css"

const Home = () => {
  return (
    <>
      <h1>Marvels</h1>;
      <div className="overflows">
        <img src={image1} alt="a wallpaper" className="card-imghome-top" />
      </div>
    </>
  );
};

export default Home;
