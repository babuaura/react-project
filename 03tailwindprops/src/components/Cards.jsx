import React from 'react'

const Cards = ({userName = 'HC', post = "Staff Engineer"}) => {
    // console.log(props);
  return (
    <>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/21336648/pexels-photo-21336648/free-photo-of-the-eclipse-of-the-sun-is-seen-in-this-black-and-white-photo.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width="384" height="512" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                </p>
                </blockquote>
                <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                    {userName}
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                    {post}
                </div>
                </figcaption>
            </div>
            </figure>
        {/* <img src="https://images.pexels.com/photos/20711293/pexels-photo-20711293/free-photo-of-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" />
        <h1 className='text-2xl bg-green-500 p-3 rounded'> A Card for Photo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, minima.</p> */}
    </>
     )
}

export default Cards