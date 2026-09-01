import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  const imagePath = `${import.meta.env.BASE_URL}images/worldimg.jpg`;

  // console.log(imagePath);
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the world, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture , and beauty of every nation. Sort
            search, and filter through countries to find the details you need.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-img">
          <img
            src={imagePath}
            width="100%"
            alt="world image"
            className="banner-img"
          />
        </div>
      </div>
    </main>
  );
};
