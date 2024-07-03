import React from 'react';
import badge from "../Image/—Pngtree—badge_996483.png";
import dollar from "../Image/pngtree-3d-dollar-coin-icon-stack-png-image_4899049-removebg-preview.png";

const SectionOne = () => {
  return (
    <div className="flex lg:px-44 flex-col items-center p-6 bg-gray-100">
      <div className="text-5xl relative top-16 font-semibold font-inter text-black">
        Comprehensive Care <br />
        <span className='lg:ml-10 font-inter'>for Every Patient</span>
      </div>
      <div className="grid grid-cols-1 mt-20 md:mt-5 lg:mt-0 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="flex flex-col bg-white rounded-2xl shadow-md h-80">
          <div className="text-6xl font-semibold ml-8 mt-8 text-black">90%</div>
          <div className="text-gray-700 mt-2 ml-8">
            Patient satisfaction <br /> rate, reflecting our <br /> commitment.
          </div>
          <img
            src="https://www.tableau.com/sites/default/files/2021-06/DataGlossary_Icons_Pie%20Chart.jpg"
            className="lg:ml-16  lg:mt-3"
            alt="Pie chart"
          />
        </div>
        <div className="flex flex-col  bg-orange-50 rounded-2xl lg:mt-32 shadow-md h-48">
          <div className="text-4xl font-semibold ml-8 mt-8 text-black">500+</div>
          <div className="text-gray-700 mt-2 ml-8">
            Board-certified <br /> doctors
          </div>
          <div className="flex items-center justify-end">
            <img className="h-20 w-20 lg:ml-5 relative bottom-6 right-5" src={badge} alt="Badge" />
          </div>
        </div>
        <div className="flex flex-col bg-white lg:mt-36 rounded-2xl shadow-md h-44">
          <div className="flex ml-8 mt-6 text-4xl font-semibold text-black">
            4.8
            <span className="ml-2 text-4xl">⭐</span>
          </div>
          <div className="text-gray-700 mt-2 ml-7">Over 20,000 patients</div>
          <div className="px-4 lg:ml-12 py-4 text-sm whitespace-nowrap">
            <div className="flex items-center">
              <img
                className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                alt="User 1"
              />
              <img
                className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                alt="User 2"
              />
              <img
                className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                alt="User 3"
              />
              <img
                className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                alt="User 4"
              />
              <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-orange-50 rounded-2xl lg:mt-32 shadow-md h-48">
          <div className="text-4xl font-semibold mt-8 ml-8 text-black">$5000</div>
          <div className="text-gray-700 mt-2 ml-8">
            Money spent <br /> for poor patients
          </div>
          <div className="flex items-center justify-end">
            <img className="h-20 w-20 lg:ml-5 relative bottom-6 right-5" src={dollar} alt="Dollar" />
          </div>
        </div>
        <div className="flex flex-col w-full bg-white rounded-2xl shadow-md h-80">
          <div className="text-4xl font-semibold mt-8 ml-8 text-black">50+</div>
          <div className="text-gray-700 mt-2 ml-8">
            Free lesson videos <br /> for patients
          </div>
          <img src="https://cdn-icons-png.freepik.com/512/4132/4132737.png" className="h-24 w-28 ml-40 mt-16" alt="Lesson videos" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
