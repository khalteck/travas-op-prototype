import { Link } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

const Main = () => {
  return (
    <>
      <Header />
      <div className="pt-[90px] px-[5%]">
        <div className="flex items-center space-x-4">
          <img src="/images/nigeria-heart-flag.svg" alt="nigeria-heart-flag" />
          <p> Perfectly designed for domestic tour operators within Nigeria</p>
        </div>
        {/* Slider Section */}
        <Slider />
        {/* Slider Section Ends */}
        <div className="bg-[#3F3D56] pt-12 pb-20 space-y-28 mb-16 rounded-t-3xl">
          {/* About Section*/}
          <div className="w-[90%] mx-auto flex flex-col items-start text-white sm:flex-row">
            <img
              className="w-[50px]"
              src="/images/rectangle.svg"
              alt="rectangle"
            />
            {/* <div className="bg-[#1F66D0] h-[50px] w-[500px]"></div> */}

            <div className="sm:pl-6 space-y-12">
              {/* About */}
              <div className="space-y-4">
                <h4 className="pt-2 text-xl font-semibold">
                  Welcome to Travas
                </h4>
                <p className="font-light md:text-lg">
                  Travas assist domestic tour operators in Nigeria to market
                  their products efficiently to individuals who want them.
                </p>
              </div>
              {/* Why choose travas */}
              <div className="space-y-4">
                <h5 className="font-semibold text-xl">Why choose Travas?</h5>
                <p className="font-light md:text-lg">
                  <strong>More revenue</strong>
                  <br />
                  Getting your products in front of the right audience could
                  increaseyour overall bookings greatly.
                </p>
                <p className="font-light md:text-lg">
                  <strong>Customers insight</strong>
                  <br />
                  Get indepth insight into what tourists are inerested in via
                  tour requests.
                </p>
                <p className="font-light md:text-lg">
                  <strong>No charges, No commission</strong>
                  <br />
                  Get indepth insight into what tourists are inerested in via
                  tour requests.
                </p>
              </div>
              {/* More Sales */}
              {/* <div className="space-y-4">
                <h4 className="text-xl font-semibold">More sales</h4>
                <p className="md:text-lg">
                  Lorem ispum et tu, Lorem ispum et tu Lorem ispum et tu, Lorem
                  ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum
                  et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu
                  ,Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem i, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et
                  tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem ispum et tu, Lorem ispum et tu
                </p>
              </div>
              {/* Tour requests 
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Tour requests</h4>
                <p className="md:text-lg">
                  Lorem ispum et tu, Lorem ispum et tu Lorem ispum et tu, Lorem
                  ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum
                  et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu
                  ,Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem i, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et
                  tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem ispum et tu, Lorem ispum et tu
                </p>
              </div>
              {/* Manage bookings 
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Manage bookings</h4>
                <p className="font-light md:text-lg">
                  Lorem ispum et tu, Lorem ispum et tu Lorem ispum et tu, Lorem
                  ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum
                  et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu
                  ,Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem i, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et
                  tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem ispum et tu, Lorem ispum et tu
                </p>
              </div>*/}
            </div>
          </div>

          {/* Price Section 
          <div className="w-[90%] mx-auto flex flex-col items-start text-white sm:flex-row ">
            <img src="/images/rectangle.svg" alt="rectangle"></img>

            <div className="sm:pl-6 space-y-12">
              {/* Pricing 
              <div className="space-y-4">
                <h4 className="pt-2 text-xl font-semibold">Pricing</h4>
                <p className="font-light md:text-lg">
                  Lorem ispum et tu, Lorem ispum et tu Lorem ispum et tu, Lorem
                  ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum
                  et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu
                  ,Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem
                  ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum
                  et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et
                  tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu,
                  Lorem ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem
                  ispum et tu, Lorem ispum et tu, Lorem ispum et tu, Lorem ispum
                  et tu
                </p>
              </div>
            </div>
          </div> */}

          {/* Support Section */}
          <div className="w-[90%] mx-auto flex flex-col items-start text-white sm:flex-row ">
            <img src="/images/rectangle.svg" alt="rectangle"></img>

            <div className="sm:pl-6 space-y-12">
              {/* Support */}
              <div className="space-y-4">
                <h4 className="pt-2 text-xl font-semibold">Support</h4>
                <p className="font-light md:text-lg">
                  For support and enquiries,
                  <br />
                  Contact us;
                  <br />
                  Phone: +2348026441652
                  <br />
                  Email:
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto md:w-fit text-center text-white">
            <p className="text-white text-md md:text-xl font-semibold">
              Become a Travas supplier for free today!
            </p>
            <Link to="/register">
              <button className="bg-[#1F66D0] px-12 py-2.5 my-6 font-semibold md:px-28 md:py-3">
                Sign up for free
              </button>
            </Link>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-[#1F66D0]">
                Login
              </Link>
            </p>
          </div>
        </div>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default Main;
