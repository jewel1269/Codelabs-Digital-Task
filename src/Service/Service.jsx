import { GoArrowUpRight } from "react-icons/go";

const Service = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container lg:ml-80  mx-auto px-4">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className=" mb-12">
        <button className="btn btn-outline btn-sm ">Service</button>
          <h1 className="text-4xl font-bold text-gray-800">Empowering Health, <br /> Enriching Lives</h1>
          <p className="text-lg text-gray-600 mt-4">We are committed to providing high-quality, <br /> compassionate care to every patient we serve. Whatever <br /> your healthcare needs may be, you can trust us to be <br /> your partner in health and wellness.</p>
          <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 flex items-center gap-2 px-4 rounded mt-6">Appointment <GoArrowUpRight /></button>
        </div>
        <div className="card bg-base-100 image-full w-96 lg:w-[500px] shadow-xl">
  <figure>
    <img
      src="https://media.istockphoto.com/id/1461330630/photo/happy-woman-going-through-her-medical-data-with-black-female-doctor-at-the-clinic.jpg?s=612x612&w=0&k=20&c=c7KP64t6h5tKD3qRYBjb3a4wWew1171clJzE-XsbiLQ="
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p></p>
    <div className="card-actions justify-start">
      
    <div className="border border-gray-200 p-2 bg-indigo-500 opacity-60 rounded-xl text-white ">
       <strong> <h1>Advanced Technology</h1></strong>
        <p>Our surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision</p>
        <div className="border relative left-60 border-gray-500 rounded-full w-11 bg-orange-400 p-1">
        <span className="text-3xl  text-white  "><GoArrowUpRight /></span>
        </div>

      </div>
    </div>
  </div>
</div>
        <div className="card bg-base-100 image-full w-96  lg:w-[500px] shadow-xl">
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
    <div className="border border-gray-200 p-2 bg-indigo-500 opacity-60 rounded-xl text-white ">
        <strong>
        <h1>Online Doctor Meeting</h1>
        </strong>
        <p>Our surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision</p>
        <div className="border relative left-60 border-gray-500 rounded-full w-11 bg-orange-400 p-1">
        <span className="text-3xl  text-white  "><GoArrowUpRight /></span>
        </div>

      </div>
    </div>
  </div>
</div>
        <div className="card opacity-100 bg-base-100 image-full w-96  lg:w-[500px] shadow-xl">
  <figure>
    <img
      src="https://www.astronhealthcare.com/blog/wp-content/uploads/2019/03/Healthcare-14176.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p></p>
    <div className="card-actions justify-start">
    <div className="border border-gray-200 p-2 bg-indigo-500 opacity-60 rounded-xl text-white ">
       <strong>
       <h1>Consultancy your health</h1>
       </strong>
        <p>Our surgeons are trained in the latest <br /> robotic surgical techniques, which <br /> allow for greater precision</p>
        <div className="border relative left-60 border-gray-500 rounded-full w-11 bg-orange-400 p-1">
        <span className="text-3xl  text-white  "><GoArrowUpRight /></span>
        </div>

      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Service;
