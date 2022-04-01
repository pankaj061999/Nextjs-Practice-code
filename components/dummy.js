import React from 'react'

const Dummy = () => {
  return (
    <div>
        <style jsx global> 
            {

                `.dummy {
                    background: green;
                }`
            }
        </style>

        <div className='dummy'>My Name is Pankaj</div>
    </div>
  )
}

export default Dummy;