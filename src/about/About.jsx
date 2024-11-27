import { useState } from "react";
import { travelone } from "../assets/images/index";
import { IoIosPlay } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const About = () => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

  const handleOpenVideo = () => {
    setIsVideoPlayed(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlayed(false);
  };

  return (
    <div className="py-12" id="about">
      <div className="mx-auto">
        <div className="mx-auto px-4 md:w-4/5 flex flex-col md:flex-row items-center gap-8">
          {/* Right Side */}
          <div className="w-full md:w-1/2">
            <h3  className='text-3xl font-bold mb-8 text-[#181E4B]'>عــن رحــلتنـا السيــاحيــة</h3>
            <p className="mt-4 text-gray-600">
            تطبيق "جولة" هو رفيقك المثالي في عالم السفر والسياحة، حيث يجمع بين التقنية المتقدمة والتجارب الفريدة لتقديم تجربة سفر لا تُنسى. يتيح لك التطبيق استكشاف أفضل الوجهات السياحية حول العالم، مع تقديم خطط سفر مخصصة تلبي اهتماماتك وميزانيتك. يوفر التطبيق حجزًا سهلاً للفنادق والرحلات الجوية، بالإضافة إلى توصيات حول الأنشطة والمعالم السياحية المحلية. بفضل واجهته السهلة الاستخدام ودعمه المتواصل، يجعل تطبيق "جولة" من تخطيط رحلتك واستمتاعك بها أمرًا في غاية السهولة والراحة. اختر "جولة" لتجربة سفر مليئة بالمغامرات والإلهام.
            </p>
          </div>
          {/* Left Side */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {!isVideoPlayed ? (
              <div className="relative">
                <img
                  src={travelone}
                  alt="Travel destination"
                  className="w-full h-auto  rounded-lg object-cover"
                />
                <button
                  onClick={handleOpenVideo}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  p-3 rounded-full bg-[#DF6951] shadow-lg cursor-pointer"
                  aria-label="Play Video"
                >
                  <IoIosPlay className="text-white text-3xl" />
                </button>
              </div>
            ) : null}
          </div>
        
        </div>
        {/* Video Modal */}
        {isVideoPlayed && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full max-w-3xl">
              <video
                controls
                autoPlay
                className="w-full h-auto rounded-lg shadow-lg"
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-3xl bg-gray-700 rounded-full p-2 cursor-pointer"
                aria-label="Close Video"
              >
                <IoIosClose />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
