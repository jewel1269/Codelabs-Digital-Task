import React from 'react';

const Faq = () => {
    return (
        <div className='bg-gray-100 p-10   '>
            <div className="lg:ml-72">
                <div className="mb-8">
                    <button className=' btn btn-outline w-24 rounded-xl mb-2'>FAQ</button>
                    <p className='text-3xl font-semibold'>Frequently Asked Questions</p>
                </div>
                <div className='flex flex-col lg:w-[1300px] items-center justify-center'>
                    <div className="collapse collapse-arrow bg-orange-50 w-full mb-4">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                        What are your office hours?
                        </div>
                        <div className="collapse-content">
                            <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. 
                                Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-orange-50 w-full mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        How can I schedule an appointment?
                        </div>
                        <div className="collapse-content">
                            <p>Begin by consulting your calendar to ascertain a range of dates and times when you are free to meet.
                                 This will ensure that you propose times that are convenient for you.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-orange-50 w-full mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Do you accept insurance?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we accept insurance. Please provide your insurance provider, plan details, and member ID for verification. Thank you.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-orange-50 w-full mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        What should I bring to my appointment?
                        </div>
                        <div className="collapse-content">
                            <p>se bring your ID, insurance card, medical records, list of medications, and payment method to your appointment. Thank you.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-orange-50 w-full mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Do you offer telemedicine appointments?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-orange-50 w-full mb-4">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Do you offer telemedicine appointments?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
