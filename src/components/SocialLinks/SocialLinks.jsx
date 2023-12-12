import './SocialLinks.css';
import { FaFacebookSquare, FaGithub, FaGooglePlusSquare, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div
            // data-aos="fade-down"
            // data-aos-duration="2500"
            className="animated-element flex flex-col gap-5 items-center">
            <hr className="w-[2px] h-[100px] bg-white" />
            <a className="text-2xl hover:text-[var(--primary-color)]" href=""><FaGithub /></a>
            <a className="text-2xl hover:text-[var(--primary-color)]" href=""><FaLinkedin /></a>
            <a className="text-2xl hover:text-[var(--primary-color)]" href=""><FaGooglePlusSquare /></a>
            <a className="text-2xl hover:text-[var(--primary-color)]" href=""><FaFacebookSquare /></a>
            <hr className="w-[2px] h-[100px] bg-white" />
        </div>
    );
};

export default SocialLinks;