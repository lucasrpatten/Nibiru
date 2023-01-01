import { Link } from "react-router-dom";
import fillerImage from "../images/imagefiller.jpg";

function Footer() {
    return (
      <>
        <div className="border-t-2 border-blue pt-20">
            <div className='w-full lg:flex gap-10'>
                <div className='text-white lg:w-1/3 h-full'>
                    <h1 className="text-2xl font-bold mb-10">NIBIRU</h1>
                    <p  className="mb-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur iustitia laudatur? Rhetorice igitur, inquam, nos mavis quam dialectice disputare? Illud dico, ea, quae dicat, praeclare inter se cohaerere. </p>
                    <Link>TSA Documentation</Link>
                </div>
                <div className='mt-20 lg:mt-0 text-2xl text-white lg:w-1/3 h-full flex flex-col items-center justify-center'>
                    <div>
                        <h1 className="mb-10">Social Network</h1>
                        <div className="flex flex-col gap-7 w-1/2">
                            <span className="flex gap-10"><img className='max-h-8 rounded-full' src={fillerImage}/><a to='/'>Discord</a></span>
                            <span className="flex gap-10"><img className='max-h-8 rounded-full' src={fillerImage}/><a to='/'>Instagram</a></span>
                            <span className="flex gap-10"><img className='max-h-8 rounded-full' src={fillerImage}/><a to='/'>Twitter</a></span>
                            <span className="flex gap-10"><img className='max-h-8 rounded-full' src={fillerImage}/><a to='/'>Facebook</a></span>
                        </div>
                    </div>
                </div>
                <div className="mt-20 lg:mt-0 lg:w-1/3 text-white h-full">
                    <h1 className="text-2xl mb-10">Sign Up for Email Updates</h1>
                    <form className='flex flex-col' action="/action_page.php">
                        <label for="fname">Enter your email</label>
                        <input type="text" id="fname" name="fname"/>
                        <input className='mt-5' type="submit" value="Subscribe"/>
                    </form>
                    <p className="mt-5">Sign up with your email to receive newletters, discounts, updates, and more!</p>
                </div>
            </div>
                <div className="text-center lg:text-left mt-24 text-white border-t-2 border-blue lg:flex justify-around items-center pt-5">
                    <p>Fake copyright information located here</p>
                    <div className='mt-5 lg:mt-0 flex gap-5 text-white lg:w-1/2 h-full justify-around'>
                        <Link to='/'>Platform</Link>
                        <Link to='/'>Pricing</Link>
                        <Link to='/'>Training</Link>
                        <Link to='/'>Company (Dropdown) </Link>
                    </div>
                </div>
            </div>
      </>
    );
  }
  
  export default Footer;