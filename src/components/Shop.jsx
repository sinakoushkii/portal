import React, { useState } from 'react'
import PortalComponent from './PortalComponent'

const Shop = () => {
    const [showPortal,setShowPortal]=useState(false)
    const showPortalHandler=()=>{
        setShowPortal(prev=>!prev)
    }   
 
    return (
    <div  className={`${showPortal ? "blur no-pointer-events" : ""} shopContainer`}>
        <div className='card'>
            <h2>Card 1</h2>
            <h3>Image 2</h3>
            <p><span>Caption 2:</span> Proident anim enim commodo quis ex nostrud ex aliquip. Non deserunt eiusmod adipisicing sint ex consectetur ut laboris quis Lorem quis. Nulla dolore in incididunt tempor excepteur sit exercitation veniam. Officia elit veniam reprehenderit elit consectetur.</p>
            <button onClick={()=>showPortalHandler()}>Detail</button>
        </div>
        <div className='card'>
            <h2>Card 2</h2>
            <h3>Image 2</h3>
            <p><span>Caption 2:</span> Proident anim enim commodo quis ex nostrud ex aliquip. Non deserunt eiusmod adipisicing sint ex consectetur ut laboris quis Lorem quis. Nulla dolore in incididunt tempor excepteur sit exercitation veniam. Officia elit veniam reprehenderit elit consectetur.</p>
            <button onClick={()=>showPortalHandler()}>Detail</button>
        </div>
        {showPortal && (
        <PortalComponent>
          <div>
            <h2>This is rendered in a portal!</h2>
            <button onClick={() => setShowPortal(false)}>Close</button>
          </div>
        </PortalComponent>
      )}
    </div>
  )
}

export default Shop