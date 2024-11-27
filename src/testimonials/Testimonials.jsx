import React from 'react';
import {testimonials} from "../constant"
import { BsChatQuoteFill } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-12 px-4">
      <div className="mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#181E4B]">قالــوا عنــا</h2>
        <p className="text-lg text-gray-600 leading-normal w-full max-w-md mx-auto  border-l-4 border-[#DF6951] pl-4">
          "يقدم موقعنا خدمات مميزة تهدف إلى تسهيل تجربة السفر وحجز الرحلات، وقد أشاد العملاء بسرعة الأداء، الأسعار المناسبة، والدعم الفني المتوفر دائمًا لضمان رضاهم التام."
        </p>
      </div>
      <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8 md:gap-12'> 
        {testimonials.map((testimonial,index) => ( 
                <div key={index} className=' relative bg-orange-50 rounded-lg p-6 flex-1'>
                    <div className=' absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                      <BsChatQuoteFill className=' size-12 text-[#DF6951]'/>
                    </div>
                    <div className='flex flex-col space-y-3 mb-4'>
                      <p className='text-lg mb-2'>{testimonial.review}</p>
                      <div className='flex gap-1'>
                       <img src={testimonial.image} alt='image review' className='rounded-full size-16 object-cover mr-4'/>
                       <div>
                        <p className='font-semibold '>{testimonial.name}</p>
                        <p className='text-gray-600'>{testimonial.location}</p>
                       </div>
                      </div>
                    </div>
                </div>
            ))}
        
      </div>
    </div>
  );
};

export default Testimonials;
