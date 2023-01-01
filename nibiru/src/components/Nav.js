import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  const element = <FontAwesomeIcon icon={faBars} />
    return (
      <>
        <div className='w-full h-20 border-b-2 border-blue'>
          <div className="hidden lg:flex">
            <div className='text-white w-1/4 h-full'>
                  <h1>(Logo) NIBIRU</h1>
              </div>
              <div className='flex gap-5 text-white w-1/2 h-full justify-around'>
                  <Link to='/'>Platform</Link>
                  <Link to='/'>Pricing</Link>
                  <Link to='/'>Training</Link>
                  <Link to='/'>Company (Dropdown) </Link>
              </div>
              <div className="w-1/4 flex text-white h-full justify-end items-start">
                <button>Sign In</button>
              </div>
          </div>
          <div className="flex items-center justify-end lg:hidden">
            <FontAwesomeIcon className='text-white text-2xl hover:cursor-pointer' icon={faBars}/>
          </div>
        </div>
      </>
    );
  }
  
  export default Nav;
  