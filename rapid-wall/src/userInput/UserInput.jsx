import React from 'react'
import { Input } from "../src/@/components/ui/input"
import { Button } from "../src/@/components/ui/button"


const UserInput = () => {
  return (
    <div className='h-screen bg-green-600 p-10'>
      <div className='text-4xl text-center pb-10'>
        Renacon Rapid Wall
      </div>
      <div className='p-10'>
        <form >
          <div className='flex justify-between pb-10'>
            <div>
              <label className='text-2xl '>Product Name:</label> <br /><br />
              <Input type='text ' className='rounded-full w-48'></Input>
            </div>
            <div>
              <label className='text-2xl '>HSN code:</label> <br /><br />
              <Input type='text ' className='rounded-full w-48'></Input>
            </div>
            <div>
              <label className='text-2xl '>GST Amount:</label> <br /><br />
              <Input type='text ' className='rounded-full w-48'></Input>
            </div>
          </div>
          <div className='flex justify-between pb-10'>
            <div>
              <label className='text-2xl '>UOI:</label> <br /><br />
              <Input type='text ' className='rounded-full w-48'></Input>
            </div>
            <div>
              <label className='text-2xl '>Bill to:</label> <br /><br />
              <Input type='text ' className='rounded-full w-48'></Input>
            </div>
            <div>
              <label className='text-2xl '>Ship to:</label> <br /><br />
              <Input type='text ' className='rounded-full w-48'></Input>
            </div>
          </div>
          <div>
            <label className='text-2xl '>Ship Through:</label> <br /><br />
            <Input type='text ' className='rounded-full w-48'></Input>
          </div>


        </form>
      </div>
      <div className='text-center'><Button className="w-40 mt-12">Get Bill</Button></div>
    </div>
  )
}

export default UserInput
