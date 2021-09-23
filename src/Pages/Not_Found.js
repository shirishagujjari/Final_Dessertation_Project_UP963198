import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {CgArrowLongLeft} from 'react-icons/cg'

function Not_Found() {
  useEffect(() => {
    document.title = 'Error(404 Notfound) - Shirisha'
  }, [])
  return (
    <div className='notfound'>
      <div className='container'>
        <div className='notfound_content'>
          <h1>404 Notfound</h1>
          <h5>Holy Crap! It Looks like you lost in space come back to earth</h5>
          <Link to='/' className='back_to_home link'>
            <CgArrowLongLeft className='icon' /> Back to Earth
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Not_Found
