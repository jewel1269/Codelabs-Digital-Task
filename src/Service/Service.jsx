
const Service = ()=>{
    return(
        <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Empowering Health, Enriching Lives</h1>
          <p className="text-gray-600 text-lg">
            We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Appointment
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="https://images.unsplash.com/photo-1526805996748-44f5e5669953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Advanced Technology" className="rounded-lg w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Advanced Technology</h2>
            <p className="text-gray-600">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="https://images.unsplash.com/photo-1526805996748-44f5e5669953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Online Doctor Meet" className="rounded-lg w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Online Doctor Meet</h2>
            <p className="text-gray-600">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="https://images.unsplash.com/photo-1526805996748-44f5e5669953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Consultancy your health" className="rounded-lg w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Consultancy your health</h2>
            <p className="text-gray-600">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Service;