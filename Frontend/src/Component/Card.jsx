import React from 'react'
import banner from '../../public/Banner.png'


const Card = ({ item }) => {
    // console.log("od", item);
    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img src={banner} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title ">
                            <p className='text-sm overflow-hidden '>{item.title}</p>
                            <div className="badge badge-outline ">{item.language}</div>
                        </h2>
                        <div className="badge badge-outline w-full"><span className='font-semibold '>author</span>: {item.author}</div>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline  "><span className='font-semibold '>Publish year </span>: {item.year}</div>
                            <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                                Buy Now
                            </div>
                           

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
