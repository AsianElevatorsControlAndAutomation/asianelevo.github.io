import React from 'react'
const Title = props => {
  const borderColors = ['border-red-700','border-green-700','border-blue-700','border-purple-700','border-lime-700','border-orange-700']
  const bgColors = ['bg-red-500','bg-green-500','bg-blue-500','bg-purple-500','bg-lime-500','bg-orange-500']
  return (
    <>
    {props.type===2?
      <div>
        <div className='text-2xl flex'>
          <div className={`w-2 bg-${props.color}-500 mr-3`} />
            {props.subTitle}
          </div>
        <div className='text-4xl revue pl-5'>{props.title}</div>
      </div>
    :
      <div className='font-bold text-4xl flex justify-center w-full'>
          <h1 className={`border-b-4 border-${props.color}-700`}>{props.title}</h1>
      </div>
    }
    </>
  )
}

export default Title