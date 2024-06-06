import React from 'react'
import data from '../../public/BookData.json'
import Card from './Card'
import { Link } from 'react-router-dom'


const Course = () => {
  console.log(data)
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We're delighted to have you <span className='text-pink-500'>Here! :</span>
          </h1>
          <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Veniam laudantium libero cupiditate, ullam error provident
            perferendis repellat suscipit itaque consequatur tenetur porro qui
            vero distinctio? Tempore similique pariatur, harum nulla nam velit saepe
            obcaecati voluptates dolorem impedit aliquid accusantium enim neque ipsa veniam
            iste explicabo dolor dicta! Facilis, repudiandae ratione.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            data.map((items, id) => (
              <Card key={id} item={items} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
