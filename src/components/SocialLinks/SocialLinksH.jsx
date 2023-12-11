import { FaFacebookSquare, FaGithub, FaGooglePlusSquare, FaLinkedin } from "react-icons/fa";


const SocialLinksH = () => {
    return (
        <div className='w-32 flex space-x-4 justify-between'>
            <a className="text-xl transition-colors hover:text-[var(--primary-color)] duration-500" href=""><FaGithub /></a>
            <a className="text-xl transition-colors hover:text-[var(--primary-color)] duration-500" href=""><FaLinkedin /></a>
            <a className="text-xl transition-colors hover:text-[var(--primary-color)] duration-500" href=""><FaGooglePlusSquare /></a>
            <a className="text-xl transition-colors hover:text-[var(--primary-color)] duration-500" href=""><FaFacebookSquare /></a>
        </div>
    );
};

export default SocialLinksH;