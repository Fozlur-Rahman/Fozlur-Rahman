
// import { FaFacebookSquare, FaGithub, FaGooglePlusSquare, FaLinkedin } from 'react-icons/fa';
import SubTitle from '../../components/SubTitle/SubTitle';
import SocialLinksH from '../../components/SocialLinks/SocialLinksH';

const Contact = () => {
    return (
        <section id='contact' className='mb-28 pb-5 '>
            <div className="section-container">
                <div>
                    <SubTitle subTitle="Contact"></SubTitle>
                </div>
                <div className='md:flex justify-between mt-28'>
                    {/* =================contact form*/}
                    <div className="contact-form bg-slate-600 rounded p-10  md:w-[50%] mx-auto">
                        <form className='space-y-4 p-10'>
                            <input className='px-4 py-2 border-0 outline-none rounded w-full' type="text" id='name' placeholder='Enter Name' /> <br />
                            <input className='px-4 py-2 border-0 outline-none rounded w-full' type="email" id='email' placeholder='Enter Email' required /> <br />
                            <input className='px-4 py-2 border-0 bg-[var(--secondary-color)] w-full rounded shadow' type="submit" value="Subscribe" />
                        </form>
                        {/* social icons */}

                        <div className='w-48 mx-auto'>
                            <SocialLinksH></SocialLinksH>
                        </div>
                    </div>


                </div>
            </div>
        </section >
    );
};

export default Contact;