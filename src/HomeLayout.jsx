import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import DataContext from "./context/DataContext";
import { useContext } from "react";

const HomeLayout = () => {

  const { width } = useContext(DataContext)
  const { search, setSearch } = useContext(DataContext)
  return (
    <div className="App">
      <Header title="DLT Student Blog"  />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;