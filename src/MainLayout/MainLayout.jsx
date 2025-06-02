import { Suspense } from "react";
import NavBar from "../components/NavBar";
import { Loader } from "../components/Loader";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense
        fallback={
          <div>
            Loading... <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
