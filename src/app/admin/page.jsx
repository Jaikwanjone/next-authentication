import Container from "../components/Container";
import Footer from "../components/Footer";
import AdminNav from "./components/AdminNav";
import Context from "./components/Context";
import SideNav from "./components/SideNav";

const AdminPage = () => {
  return (
    <Container>
      <AdminNav />
      <div className="flex-grow">
        <div className="container mx-auto">
          <div className="flex justify-between mt-10">
            <SideNav />
            <Context />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default AdminPage;
