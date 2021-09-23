import React, {useState} from 'react'
import {HiOutlineArrowNarrowUp} from 'react-icons/hi'

const ArrowUp = () => {
  const [showScroll, setShowScroll] = useState(false)
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }
  window.addEventListener('scroll', checkScrollTop)
  return (
    <div className={showScroll ? 'arrow_up' : 'hide'} onClick={scrollTop}>
      <HiOutlineArrowNarrowUp className='icon' />
    </div>
  )
}

export default ArrowUp
