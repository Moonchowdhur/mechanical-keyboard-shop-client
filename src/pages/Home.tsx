import CarouselImage from "./CarouselImage";
import CustomerReview from "./CustomerReview";
import FeatureBarands from "./FeatureBarands";
import FeaturedProducts from "./FeaturedProducts";
import KeyboardImportance from "./KeyboardImportance";
import ServiceAdvertisement from "./ServiceAdvertisement";

const Home = () => {
  return (
    <div>
      <CarouselImage></CarouselImage>
      <ServiceAdvertisement />
      <FeaturedProducts />
      <FeatureBarands />
      <CustomerReview/>
      <KeyboardImportance/>
    </div>
  );
};

export default Home;
