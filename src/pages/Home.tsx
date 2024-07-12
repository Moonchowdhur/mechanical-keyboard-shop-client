import CarouselImage from "./CarouselImage";
import CustomerReview from "./CustomerReview";
import FeatureBarands from "./FeatureBarands";
import FeaturedProducts from "./FeaturedProducts";
import KeyboardImportance from "./KeyboardImportance";
import Sell from "./Sell";
import ServiceAdvertisement from "./ServiceAdvertisement";

const Home = () => {
  return (
    <div className="mt-28 md:mt-0">
      <CarouselImage></CarouselImage>
      <ServiceAdvertisement />
      <FeaturedProducts />
      <FeatureBarands />
      <CustomerReview />
      <KeyboardImportance />
      <Sell />
    </div>
  );
};

export default Home;
