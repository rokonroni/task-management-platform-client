import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ManageTask = () => {
    return (
        <div>
      <Helmet>
        <title>DashBoard || Task Management</title>
      </Helmet>
      <SectionTitle title={"Manage Task"} subTitle={"Manage your tasks"} />
      
    </div>
    );
};

export default ManageTask;