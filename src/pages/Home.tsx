import CarouselImage from "./CarouselImage";
import FeaturedProducts from "./FeaturedProducts";
import ServiceAdvertisement from "./ServiceAdvertisement";

const Home = () => {
  return (
    <div>
      <CarouselImage></CarouselImage>
      <ServiceAdvertisement />
      <FeaturedProducts/>
    </div>
  );
};

export default Home;
