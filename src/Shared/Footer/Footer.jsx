import { Link } from "react-router-dom";
import SocialLinksH from "../../components/SocialLinks/SocialLinksH";
import logo from "../../assets/images/logo/logo.png";

const Footer = () => {
    return (
        <div className="max-w-full bg-[var(--secondary-color)] py-12 mt-[200px] ">
            <div className="w-[80%] md:w-[60%] mx-auto">
                <div className="w-32 mx-auto">
                    <Link>
                        <img className='' src={logo} alt="" />
                    </Link>
                </div>
                <div className="w-32 mx-auto my-4">
                    <SocialLinksH></SocialLinksH>
                </div>
                <p className="text-white text-center underline">Copyright © 2023 by Fozlur || All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;