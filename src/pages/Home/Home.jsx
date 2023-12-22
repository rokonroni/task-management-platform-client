import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import UserData from "../../components/UserData/UserData";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Task Management</title>
            </Helmet>
            <Navbar />
            <Banner />
            <UserData />
            <Footer />
            
        </div>
    );
};

export default Home;