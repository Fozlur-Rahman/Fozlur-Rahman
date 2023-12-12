
// import { FaFacebookSquare, FaGithub, FaGooglePlusSquare, FaLinkedin } from 'react-icons/fa';
import SubTitle from '../../components/SubTitle/SubTitle';
import SocialLinksH from '../../components/SocialLinks/SocialLinksH';

const Contact = () => {
    return (
        <section id='contact' className='py-20 my-20 '>
            <div className="section-container">
                <div>
                    <SubTitle subTitle="Contact"></SubTitle>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    className=' mt-28'>
                    {/* =================contact form*/}
                    <div className="contact-form bg-[var(--secondary-color)] rounded p-5 md:p-8 lg:p-10  md:w-[60%] mx-auto">
                        <form className='space-y-4 p-10'>
                            <input className='px-4 py-2 border-0 outline-none rounded w-full' type="text" id='name' placeholder='Enter Name' /> <br />
                            <input className='px-4 py-2 border-0 outline-none rounded w-full' type="email" id='email' placeholder='Enter Email' required /> <br />
                            <input className='px-4 py-2 border-0 bg-[var(--primary-color)] w-full rounded shadow' type="submit" value="Subscribe" />
                        </form>
                        {/* social icons */}

                        <div className='w-32 mx-auto'>
                            <SocialLinksH></SocialLinksH>
                        </div>
                    </div>


                </div>
            </div>
        </section >
    );
};

export default Contact;