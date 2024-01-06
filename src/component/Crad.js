import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'


export const Crad = (props) => {
    let review = props.review;
    return (
        <div className='flex flex-col md:relative '>

            {/* image  */}

            <div className=' z-[0] absolute md:-top-[80px] sm:top-[10rem] top-[10rem] '>
                <img className='md:w-[140px] md:h-[140px] aspect-square rounded-full z-[20]  sm:w-[100px] sm:h-[100px] w-[85px] h-[85px] ' src={review.image} />
                <div className='md:w-[140px] md:h-[140px] z-[-15] absolute -top-1 left-2  rounded-full  sm:w-[100px] sm:h-[100px]  w-[85px] h-[85px]  bg-violet-400 mx-auto  '></div>
            </div>

            {/* Name & Job  */}

            <div className=' text-center sm:mt-[40px] mt-[2rem] font-bold text-2xl capitalize '>{review.name} </div>
            <div className='text-center mt-2 text-violet-300 uppercase text-sm ' >{review.job} </div>

            {/* Icon  */}

            <div className='text-violet-400 mx-auto mt-5 '>
                <FaQuoteLeft />
            </div>

            {/* description text  */}

            <div className='text-center mt-4 text-slate-500'>
                {review.text}
            </div>

            {/* Icon  */}

            <div className='text-violet-400 mx-auto mt-5 '>
                <FaQuoteRight />
            </div>

            {/* button for changing card  */}

            {/* ---->>> yha pe ye button dada change krne k liye use kiye gye hai to data to Testimonials 
              me hai to ye buttons wha pe use hoge , Surprice button random card ( yani data) dega 
              ------>>>> aur yha ak hi  data show hoga to yha button ka sence nhi banta hai
              ----->>> Sara data testimonial me hai yha sirphak hai*/}

            {/* <div className=' flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto '>
                <button className=' cursor-pointer hover:text-violet-500 '>
                    <FiChevronLeft />
                </button>

                <button className=' cursor-pointer hover:text-violet-500 '>
                    <FiChevronRight />
                </button>
            </div>


            <div>
                <button className='bg-violet-400 hover:bg-violet-500 transition-all 
                duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                    Surprice Me
                </button>
            </div> */}

        </div>
    )
}


export default Crad;