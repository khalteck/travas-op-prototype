import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

function Step2() {
  return (
    <>
      <div className="pt-[100px] md:pt-[120px] w-[90%] px-1 mx-auto md:w-full md:mx-0 md:px-[80px] pb-20">
        <Link to="/step1">
          <div className="flex items-center space-x-4">
            <img className="w-[16px]" src="/images/arrow.svg" alt="arrow" />
            <p>Step 1</p>
          </div>
        </Link>
        {/* progress ball 2 */}
        <div className="w-full flex justify-center">
          <img
            className="w-[20%]"
            src="images/Progress-balls-2.svg"
            alt="Progress ball-2"
          />
          <div></div>
        </div>
        {/*  Get creative */}
        <div className="flex items-center space-x-5 pt-8">
          <div className="rounded-full border w-fit">
            <img
              className="w-[90%] mx-auto"
              src="/images/Bright Mind.svg"
              alt=""
            />
          </div>

          <div className="flex flex-col border rounded-3xl px-5 py-2 md:px-9">
            <p className="font-medium">Get creative!</p>
            <p className="font-light">
              Don’t just stick to the old ways. Try out new ways to satisfy your
              tourists to the fullest
            </p>
          </div>
        </div>
        {/* Get creative ends */}

        {/* Itineraery */}
        <div className="mt-12 space-y-2">
          <h3 className="font-medium">Itineraery</h3>
          <p className="font-light">
            Tour itinerary impacts the chances of tour package being booked by a
            large extent
          </p>
          <p className="font-light">
            Give a full interesting description of your tour package
          </p>
          <div className="pt-6">
            <textarea
              className="bg-[#F5F5F5] pl-3 pt-3 h-[150px] w-full focus:outline-none placeholder:text-sm resize-none md:w-[60%]"
              placeholder="Enter full description here"
            ></textarea>
          </div>
        </div>

        {/* What to expect */}
        <div className="mt-10 space-y-2">
          <h3 className="font-medium">What to expect</h3>
          <p className="font-light pb-6">
            Highlight the most interesting and juicy parts of your tour package,
            so tourists can easilt spot them
          </p>
          <div className="relative border-2 px-3 py-6  mx-auto md:py-8 md:pr-9 md:w-[70%] md:mx-0">
            <p>Sample</p>
            <div className="flex items-center justify-between font-light text-sm w-full">
              <div className="pr-4 flex items-center space-x-2">
                <div className="bg-[#B6B1B1] rounded-full w-3 h-3"></div>
                <p>Luxurious accomodation</p>
              </div>
              <div className="pr-4 flex items-center space-x-2">
                <div className="bg-[#B6B1B1] rounded-full w-3 h-3"></div>
                <p>An amazing and caring tour guide</p>
              </div>
              <div className="pr-2 flex items-center space-x-2">
                <div className="bg-[#B6B1B1] rounded-full w-3 h-3"></div>
                <p>Delicious local dishes</p>
              </div>
              <div className="absolute -right-9 -top-10 md:top-10 md:left-[70%] md:w-fit">
                <img
                  className="md:w-[80%]"
                  src="/images/Cancel.svg"
                  alt="cancel-icon"
                />
              </div>
            </div>
          </div>

          {/* what to expect input */}
          {/* first row */}
          <div className="flex flex-wrap gap-6 w-[100%] pt-9">
            <div>
              <input
                className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
                placeholder="what to expect"
              />
            </div>
            <div>
              <input
                className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
                placeholder="what to expect"
              />
            </div>
            <div>
              <input
                className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
                placeholder="what to expect"
              />
            </div>
            <div>
              <input
                className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
                placeholder="what to expect"
              />
            </div>
          </div>
          {/* second row */}
          <div className="flex flex-wrap items-center w-[100%] gap-6 pt-4">
            <div>
              <input
                className="border-b-2 focus:outline-none pl-2 pb-2 placeholder:text-xs"
                placeholder="what to expect"
              />
            </div>
            <div className="flex items-center space-x-3 w-[25%]">
              <img src="/images/plus.svg" alt="" />
              <a className="text-[#1F66D0]" href=".">
                Add more
              </a>
            </div>
          </div>
        </div>

        {/* Tour Photos */}
        <div className="space-y-2 pt-16">
          <h3 className="font-medium">Tour photos</h3>
          <p className="font-light pb-6">
            Upload amazing photos related to the tour package you are organizing
          </p>
          {/* images container */}
          <div></div>
          <p className="font-light">Upload a minimum of three photos</p>
          {/* buttons */}
          <div className="flex space-x-6 pt-8">
            <button className="border bg-[#1F66D0] flex items-center text-white px-9 py-2 rounded-full shadow-md">
              <span className="pr-4">
                <img className="w-[14px]" src="/images/plus2.svg" alt="" />
              </span>
              Upload
            </button>
            <button className="border border-black text-[#1F66D0] px-11 py-2 rounded-full shadow-md">
              Replace
            </button>
          </div>
        </div>
        {/* Back and next button */}

        <div className="flex sm:justify-end justify-between mt-24 space-x-6">
          <Link to="/step1">
            <button className="text-[#1F66D0] bg-white border border-[#1F66D0] font-semibold px-12 py-3 md:px-24">
              Back
            </button>
          </Link>
          <Link to="/step3">
            <button className="bg-[#1F66D0] text-white font-semibold px-12 py-3 md:px-24">
              Next
            </button>
          </Link>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Step2;
