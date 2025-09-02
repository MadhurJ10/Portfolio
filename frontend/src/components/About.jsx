import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col sm:flex-row sm:justify-between sm:gap-[2rem]'>
            <div className=' sm:w-[30rem]'>
                <h1>About.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam rem, quis labore molestiae sit sapiente eius odit sint laudantium earum velit vero quo ea accusamus tempore laborum dolores atque nobis error voluptate minus aliquid. Quia sint corrupti autem facilis?</p>
            </div>
            <div className='bg-black flex flex-col'>
                <div className=''>
                    <h3>Status</h3>
                    <div className='flex flex-row  items-center gap-2'>
                        <span className='w-2 h-2 bg-green-500 rounded-2xl'></span>
                        <span>Available for work</span>
                    </div>
                    <div className='flex flex-row  items-center gap-2'>
                        <span className='w-2 h-2 bg-blue-600 rounded-2xl'></span>
                        <span>Open to freelance</span>
                    </div>
                    <div></div>
                </div>
                <div>
                    <h3>Focus</h3>
                    <ul class="list-disc pl-5 flex flex-col justify-center">
                        <li>hehe</li>
                        <li>sadknajsndae</li>
                    </ul>

                    {/* <div className='flex flex-row  items-center gap-2'>
                        <span className='w-2 h-2 bg-blue-600 rounded-2xl'></span>
                        <span>Open to freelance</span>
                    </div>
                    <div className='flex flex-row  items-center gap-2'>
                        <span className='w-2 h-2 bg-blue-600 rounded-2xl'></span>
                        <span>Open to freelance</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default About
