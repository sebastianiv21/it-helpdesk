import { Link } from 'react-router-dom'

const NavInfo = () => {
  return (
    <header className='navbar bg-secondary'>
      <Link
        to='/'
        className='d-flex align-items-center text-primary text-decoration-none ms-4 me-auto'
      >
        <img src='/images/logoapp.svg' alt='IT Technology logo' width='40' />
        <div className='ms-2 fs-5 lh-1'>
          <p className='fw-bold m-0'>IT TECHNOLOGY</p>
          <p className='m-0'>Help Desk</p>
        </div>
      </Link>
    </header>
  )
}

export default NavInfo
