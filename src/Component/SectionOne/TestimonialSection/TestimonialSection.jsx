import React from 'react';

const TestimonialSection = () => {
  return (
   <div className='bg-gray-100'>
     <div className="lg:ml-80 ml-10">
        <button className="btn btn-outline btn-sm">Testimonial</button>
        <div className="text-3xl font-bold text-black">What they say about us</div>
      </div>
    <div className="flex flex-col items-center bg-gray-100 p-6">
      
      <div className="grid grid-cols-1 md:grid-cols-3 bg-orange-50 rounded-2xl gap-6 w-full max-w-7xl">
        <div className="bg-orange-50 rounded-lg p-6">
          <div className="text-xl font-bold text-black mb-2">Expertise and Compassion Combined</div>
          <p className="text-gray-700 mb-4">
            I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgN51sa08AVCeLMgdWIUJsvxzmmPJOKy2bJw&s"
              alt="Sarah D"
              className="rounded-full w-10 h-10 mr-3"
            />
            <div className="text-gray-700">
              <div>Sarah D, IT Professional</div>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 rounded-lg p-6">
          <div className="text-xl font-bold text-black mb-2">Life-Saving Care, Life-Changing Experience</div>
          <p className="text-gray-700 mb-4">
            My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life. and also save your country
          </p>
          <div className="flex items-center">
            <img
              src="https://img.freepik.com/free-photo/portrait-young-teen-tourist-visiting-great-wall-china_23-2151261879.jpg"
              alt="Michael R"
              className="rounded-full w-10 h-10 mr-3"
            />
            <div className="text-gray-700">
              <div>Michael R, Business Executive</div>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 rounded-lg  p-6">
          <div className="text-xl font-bold text-black mb-2">A Partner in Health and Wellness</div>
          <p className="text-gray-700 mb-4">
            As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and wellness.
          </p>
          <div className="flex items-center">
            <img
              src="https://getimagehub.com/wp-content/uploads/2024/05/Stylish-Boy-DP.webp"
              alt="David S"
              className="rounded-full w-10 h-10 mr-3"
            />
            <div className="text-gray-700">
              <div>David S, Lawyer</div>
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default TestimonialSection;
