import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1 '>
          <input className='boarder p-3 rounded-lg ' maxLength="62" minLength="10" type='text' placeholder='Name' id='name' required /> 
          <textarea className='boarder p-3 rounded-lg '  type='text' placeholder='Description' id='description' required />  
          <input className='boarder p-3 rounded-lg ' type='text' placeholder='Address' id='address' required />   
          <div className='flex gap-4 flex-wrap'>
            <div className='flex gap-2'>
              <input id='sale' type='checkbox' className='w-5'/>
              <span>Sell</span>
            </div>
            <div className='flex gap-2'>
              <input id='rent' type='checkbox' className='w-5'/>
              <span>Rent</span>
            </div>
            <div className='flex gap-2'>
              <input id='parking' type='checkbox' className='w-5'/>
              <span>Parking spot</span>
            </div>
            <div className='flex gap-2'>
              <input id='furnished' type='checkbox' className='w-5'/>
              <span>Furnished</span>
            </div>
            <div className='flex gap-2'>
              <input id='offer' type='checkbox' className='w-5'/>
              <span>Offer</span>
            </div>
          </div>
          <div className='flex flex-wrap gap-6'>
            <div className='flex items-center gap-2'>
              <input id='bedrooms' required className='p-3 border-gray-300 rounded-lg' type='number' min='1' max='10' />
              <p>Beds</p>
            </div>
            <div className='flex items-center gap-2'>
              <input id='bathrooms' required className='p-3 border-gray-300 rounded-lg' type='number' min='1' max='10' />
              <p>Baths</p>
            </div>
            <div className='flex items-center gap-2'>
              <input id='regularPrice' required className='p-3 border-gray-300 rounded-lg' type='number' min='1' max='10' />
              <div className='flex flex-col items-center '>
                <p>Regular price</p>
                <span className='text-xs'>($ / Month)</span>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <input id='discountPrice' required className='p-3 border-gray-300 rounded-lg' type='number' min='1' max='10' />
              <div className='flex flex-col items-center '>
                <p>Discounted price</p>
                <span className='text-xs'>($ / Month)</span>
              </div>
            </div>
            </div>  
          </div>
          <div className='flex flex-col flex-1 gap-4'>
            <p className='font-semibold '>Images:
              <span className='font-normal text-gray-600 ml-2 ' >The first image will be the cover (max 6)</span>
            </p>
            <div className='flex gap-4'>
              <input type='file' id='images' accept='image/*' multiple className='p-3 border border-gray-300 rounded w-full' />
              <button className='p-3 text-green-700 border border-green-5700 rounded uppercase hover:shadow-orange-lg disabled:opacity-80 '>Upload</button>
            </div>
            <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Listing</button>
          </div>
      </form>
    </main>
  )
}
