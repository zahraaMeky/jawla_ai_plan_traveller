import React from 'react'
import { stories } from "../constant"
export const Stories = () => {
  return (
    <div id="stories" className='py-12 bg-orange-50'>
        <div className='mx-auto px-4'>
            <h3 className='text-3xl font-bold mb-8 text-center text-[#181E4B]'>قـصص ملهمــة</h3>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {stories.map((story) => ( 
                <div className='bg-white rounded-lg  shadow-md overflow-hidden cursor-pointer '>
                    <img src={story.image} alt='' className=' object-cover w-full hover:scale-110 duration-300  transform transition'/>
                    <div className='p-4 text-center'>
                        <h4 className='mb-2 text-xl font-bold text-[#DF6951]'>{story.title}</h4>
                        <p className='text-gray-600 leading-normal  line-clamp-5'>{story.desc}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}
