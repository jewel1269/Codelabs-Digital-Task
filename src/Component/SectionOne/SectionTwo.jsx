
const SectionTwo = () => {
    return (
        <div className="flex flex-col md:flex-row items-start justify-around p-6 bg-gray-100">
        <div className="flex flex-col  rounded-lg   w-[470px] h-[355px]">
          <div className="text-sm font-semibold text-black border w-24 rounded-xl p-1 border-gray-800 mb-2">Who we are</div>
          <div className="text-3xl font-bold text-blue-900 mb-4">We Help To Get Solutions</div>
          <p className="text-gray-700 mb-6">
            We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your <br /> family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
          </p>
          <button className="bg-yellow-500 text-black w-36 font-semibold py-2 px-4 rounded-md flex items-center">
            Learn more <span className="ml-2">↗</span>
          </button>
        </div>
        <div className="card  bg-base-100 image-full w-96  lg:w-[500px] shadow-xl">
  <figure>
    <img
      src="https://media.istockphoto.com/id/1249601252/photo/female-doctor-waving-and-talking-with-colleagues-through-a-video-call-with-a-laptop-in-the.jpg?s=612x612&w=0&k=20&c=pGBdggh0QsfFtNVTjkBHF6CubKnSfzrBuZLmM8whdOo=
"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p></p>
    <div className="card-actions justify-start">
    <div className="border relative top-16 lg:right-28 right-8 border-gray-200 p-4 font-inter bg-indigo-800  rounded-xl  ">
        <strong>
        <h1>Our Mission is simple </h1>
        </strong>
        <p>Our surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision</p>

      </div>
    </div>
  </div>
</div>
      </div>
    );
};

export default SectionTwo;