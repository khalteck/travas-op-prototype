import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const Dashboard = ({ currentPage, handleCurrentPage, logout }) => {
  return (
    <div className="w-full">
      <Sidebar
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
        logout={logout}
      />
      <div className="w-full md:w-[80%] float-right bg-white pt-[80px] md:pt-[50px] px-0 md:px-12">
        <div className="w-full min-h-[80vh] mb-16 px-3">
          <p>Welcome back</p>
          <div className="flex items-center gap-2 mt-5">
            <strong>Angie style travels and tours limited</strong>
            <img
              alt=""
              src="/images/icons8-chevron-right-30.png"
              className="w-3 h-4"
            />
          </div>
          <div className="w-full h-[fit-content] md:h-[80px] flex gap-4 mt-6">
            <div className="p-3 h-[fit-content] md:h-full flex items-center border border-gray-300 rounded-md">
              <img alt="" src="/images/Vector-info.png" className="w-10" />
            </div>
            <div className="w-full py-3 px-6 border border-gray-300 rounded-md block md:flex justify-between">
              <div>
                <p>How can we serve you better?</p>
                <p className="text-[0.8rem] mt-2">
                  Help us improve the platform by giving us your feedback
                </p>
              </div>
              <Link to="/product-feedback">
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <p className="text-blue-500">Send feedback</p>
                  <img
                    alt=""
                    src="/images/icons8-chevron-right-blue.png"
                    className="w-3 h-4"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full h-[60px] flex gap-4 mt-6">
            <div className="p-3 flex items-center border border-gray-300 rounded-md">
              <img alt="" src="/images/Invite.png" className="w-10" />
            </div>
            <div className="w-full py-3 px-6 border border-gray-300 rounded-md flex items-center justify-between">
              <div className="flex gap-8">
                <p className="underline">7</p>
                <p>How can we serve you better?</p>
              </div>
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                <img
                  alt=""
                  src="/images/icons8-chevron-right-blue.png"
                  className="w-3 h-4"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between mt-8 mb-16 md:md-0">
            <h1 className="font-bold text-[1.25rem]">Packages</h1>
            <Link to="/step1">
              <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-md p-3">
                Create new package
              </button>
            </Link>
          </div>

          <div className="my-10 text-center">
            <img
              alt=""
              src="/images/undraw_no_data_re_kwbl 1.png"
              className="w-[180px] h-auto mx-auto mb-5"
            />
            <p className="text-gray-500">No packages yet</p>
            <Link to="/step1">
              <p className="mt-4 text-blue-500 font-bold">Create new package</p>
            </Link>
          </div>

          <div className="w-full h-[fit-content] md:h-[80px] flex gap-4 mt-6">
            <div className="p-3 h-[fit-content] md:h-full flex items-center border border-gray-300 rounded-md">
              <img alt="" src="/images/Vector-user.png" className="w-10" />
            </div>
            <div className="w-full py-3 px-6 border border-gray-300 rounded-md block md:flex justify-between">
              <div>
                <p>Your identity is unverified</p>
                <p className="text-[0.8rem] mt-2">
                  Your identity would need to be verified before you'll be able
                  to create a tour package
                </p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <Link to="/verify">
                  <p className="text-blue-500">Verify identity</p>
                </Link>
                <img
                  alt=""
                  src="/images/icons8-chevron-right-blue.png"
                  className="w-3 h-4"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Dashboard;
