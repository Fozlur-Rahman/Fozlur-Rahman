import { Link } from 'react-router-dom';
import adminImg from '../../src/assets/images/hero/hero.png';

const AdminNav = () => {
    return (
        <div className='bg-[var(--secondary-color)] px-6 md:py-10 text-white rounded md:flex lg:flex-col'>
            <div className='md:flex lg:flex-col'>
                <img className='rounded-full ring-2 ring-white lg:w-[25%] md:w-[8%] lg:mx-auto' src={adminImg} alt="Admin Profile" />
                <p className='text-center py-3 lg:block md:hidden'>Fozlur Rahman</p>
            </div>
            <ul className='text-center md:space-y-3 mt-5 md:flex lg:flex-col'>
                <li className='p-2 bg-[var(--body-color)] rounded'><Link to="">Home</Link></li>
                <li className='p-2 bg-[var(--body-color)] rounded'><Link to="projects">Projects</Link></li>
                <li className='p-2 bg-[var(--body-color)] rounded'><Link to="followers">Followers</Link></li>
            </ul>
        </div>
    );
};

export default AdminNav;
