import './Navbar.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";


const Navbar = () => {
    const [mobile, setMobile] = useState(false);
    const handleMobileMenu = () => {
        setMobile(!mobile)
        console.log(mobile)

    }
    return (
        <div className="shadow-lg py-5">
            <div className="nav section-container mx-auto flex justify-between items-center">
                <div>
                    <Link>Brand</Link>
                </div>
                <div className={`mobile-menu ${mobile ? 'open' : 'close'}`}>
                    <ul className="menu md:flex md:space-x-12 md:space-y-0 space-y-6 items-center">
                        <li><a href="#about">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><button className=" border-2 border-[var(--primary-color)] px-4 py-2 rounded">Resume</button></li>
                    </ul>
                </div>
                <button onClick={handleMobileMenu} className="md:hidden border-2 border-[var(--primary-color)] p-1 text-2xl">
                    {
                        mobile ? <HiMiniXMark />
                            : <HiBars3BottomRight />
                    }
                </button>
            </div>
        </div>
    );
};

export default Navbar;