import React from 'react';
import Header from './Navbar';
import { Button } from '../ui/button';
import travelerImage from '../../assets/Traveller.png'; // Adjusted image path

function Hero() {
  return (
    <div id="home" className='bg-hero-bg bg-no-repeat bg-cover bg-center relative z-10 pb-6 overflow-x-hidden fade-in px-5'>
      <div className='lg:flex max-w-[1400px] mx-auto justify-between items-center px-3 pt-12'>
        <div className='lg:w-2/5'>
          <h2 className='xl:text-[3rem] lg:text-5xl text-4xl lg:text-right text-center font-bold lg:leading-snug mb-5 text-[#181E4B]'>
          خطط <span className='text-orange-500'>مغامرتك</span> القادمة مع تطبيق جولة
          </h2>

          <p className='text-gray-600 text-lg leading-normal mb-8 lg:text-right text-center'>
            اكتشف عالماً جديداً من الرحلات المصممة خصيصاً لك بفضل تقنيات الذكاء الاصطناعي. نقدم لك تجربة فريدة حيث يمكنك التخطيط لمغامرتك القادمة بكل سهولة، واختيار مساراتك المثالية، ومعرفة أدق التفاصيل عن كل وجهة. سواء كنت تبحث عن استكشاف مدن جديدة، أو خوض مغامرات في الطبيعة، أو الاسترخاء على الشواطئ الساحرة، نحن هنا لنقدم لك رحلة تناسب أحلامك وتطلعاتك.
          </p>
          <div className='flex gap-5'>
          <a href="#contact" className='bg-[#DF6951] transition-bg shadow py-5 lg:px-10 lg:w-auto w-full outline-none text-white hover:bg-white hover:text-[#DF6951] cursor-pointer text-base hover:border hover:border-[#DF6951] border border-[#DF6951]'>إنشـاء رحـلة </a>
            <a href="#stories" className='bg-white transition-bg shadow py-5 lg:px-10 lg:w-auto w-full outline-none text-[#DF6951] hover:bg-[#DF6951] hover:text-white cursor-pointer text-base hover:border hover:border-primary border border-[#DF6951]'>
              إقرأ المـزيد
            </a>
          </div>
        </div>
        <div className='lg:w-3/5 flex items-center justify-end lg:pt-0 pt-10 lg:mr-8'>
          <img src={travelerImage} alt="Traveler" className='w-[45rem] h-full' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
