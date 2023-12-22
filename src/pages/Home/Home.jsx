import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Task Management</title>
            </Helmet>
            <Navbar />
            <Banner />
            <Footer />
            
        </div>
    );
};

export default Home;