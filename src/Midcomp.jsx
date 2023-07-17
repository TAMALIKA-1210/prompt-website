import React from 'react'
import meet from './images/meet.png'
import './Midcomp.css'

export default function Midcomp() {
  const myArray=[
    {
      name:'Meeting', 
      img:require ('./images/meet.png')
    },
    {
      name:'Homeworks', 
      img:require ('./images/homework.png')
    },
    {
      name:'Projects Done', 
      img:require ('./images/projects.png')
    }
  ]
  const mylist=[
    {
      name:'Due Dates of Projects',
      img:require ('./images/due dates.png')
    },
    {
      name:'Birthdays', 
      img:require ('./images/birthdays.png')
    }
  ]
  return (
    <div className='events'>
    <div className='list'>
      {myArray.map((item,id)=>(
        <div className='works' key={id}>
        <img src={item.img} />
        <h1>{item.name}</h1>
        

        </div>

      ))}
      </div>
      <div className='list'>
      {mylist.map((item,id)=>(
        <div className='works' key={id}>
        <img src={item.img} />
        <h1>{item.name}</h1>
        

        </div>

      ))}
      </div>
      </div>
  )
}
