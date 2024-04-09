import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>
      <form className='flex flex-col sm:flex-row'>
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
        </div>
      </form>
    </main>
  )
}
