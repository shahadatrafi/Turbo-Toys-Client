import Gallery from "../Gallery";
import ShopByCategory from "../ShopByCategory";
import WhyWe from "../WhyWe";
import Banner from "../banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <WhyWe></WhyWe>
        </div>
    );
};

export default Home;

