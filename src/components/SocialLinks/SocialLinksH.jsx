import { FaFacebookSquare, FaGithub, FaGooglePlusSquare, FaLinkedin } from "react-icons/fa";


const SocialLinksH = () => {
    return (
        <div className='flex space-x-4'>
            <a className="text-2xl transition-colors hover:text-[var(--primary-color)] duration-500" href=""><FaGithub /></a>
            <a className="text-2xl transition-colors hover:text-[var(--primary-color)] duration-500" href=""><FaLinkedin /></a>
            <a className="text-2xl transition-colors hover:text-[var(--primary-color)] duration-500" href=""><FaGooglePlusSquare /></a>
            <a className="text-2xl transition-colors hover:text-[var(--primary-color)] duration-500" href=""><FaFacebookSquare /></a>
        </div>
    );
};

export default SocialLinksH;