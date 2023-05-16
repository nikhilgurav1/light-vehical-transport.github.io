import React from 'react'

export default function SidePanel() {
  return (
    <>
    <div class="btn-group-vertical float-end p-3" role="group" aria-label="Vertical button group">
    <button type="button" class="btn btn-outline-secondary mt-3 mb-3">New Feed</button>
    <button type="button" class="btn btn-outline-secondary mb-3">Vehicals</button>
    <button type="button" class="btn btn-outline-secondary mb-3">Vehical Load</button>
    <button type="button" class="btn btn-outline-secondary mb-3">Search Vehical</button>
    
  </div>   
    <div className="container mt-2" id='center'> <p className='bg'>Hello
        </p></div>
    </>
  )
}
