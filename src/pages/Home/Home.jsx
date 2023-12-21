import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Task Management</title>
            </Helmet>
            <Navbar />
            <Banner />
        </div>
    );
};

export default Home;