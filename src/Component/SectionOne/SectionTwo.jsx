
const SectionTwo = () => {
    return (
        <div className="flex flex-col md:flex-row items-start justify-center p-6 bg-gray-100 gap-6">
        <div className="flex flex-col  rounded-lg  p-6 w-[470px] h-[355px]">
          <div className="text-sm font-semibold text-black border w-24 rounded-xl p-1 border-gray-300 mb-2">Who we are</div>
          <div className="text-3xl font-bold text-blue-900 mb-4">We Help To Get Solutions</div>
          <p className="text-gray-700 mb-6">
            We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
          </p>
          <button className="bg-yellow-500 text-white w-36 font-semibold py-2 px-4 rounded-md flex items-center">
            Learn more <span className="ml-2">↗</span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md w-full md:w-auto">
          
          <div className="flex flex-col bg-blue-800 text-white p-6 rounded-md w-full md:w-[355px]">
            <div className="text-2xl font-bold mb-2">Our mission is simple</div>
            <p>
              To provide high-quality healthcare services that are accessible, personalized, and patient-centered.
            </p>
          </div>
          <img
            src="https://via.placeholder.com/355x355"
            alt="Doctor"
            className="rounded-md md:mr-0"
            style={{ width: '355px', height: '355px' }}
          />
        </div>
      </div>
    );
};

export default SectionTwo;