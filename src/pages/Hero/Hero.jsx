// import heroImg from '../../assets/images/hero/hero.png';
// import heroOverly from '../../assets/images/hero/heroovely.jpg';
// import SubTitle from '../../components/SubTitle/SubTitle';
// import { FaLinkedin } from "react-icons/fa6";
// import { FaGooglePlusSquare, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import './Hero.css';


const Hero = () => {
    return (
        <section id="hero" className="hero-section h-[90vh]  pt-20">

            <div className="section-container h-full md:flex md:justify-between md:items-center space-y-20">
                {/* =========================================================hero content */}
                <div className="space-y-10">
                    <div data-aos="fade-left" data-aos-duration="2000" >
                        <p className='high-light-text'>Hello! I am</p>
                        <h1 className="hero-title text-4xl md:text-7xl font-bold mt-1 text-white">Fozlur Rahman Zishan
                        </h1>

                    </div>
                    <div>
                        <h3 className="text-sm md:text-xl high-light-text">
                            <TypeAnimation
                                sequence={[
                                    'Front',
                                    500,
                                    'Front End', //  Continuing previous Text
                                    500,
                                    'Front End Developer',
                                    500,
                                    'Front End',
                                    500,
                                    'Front',
                                    500,
                                    '',
                                    500,
                                ]}
                                style={{ fontSize: '2em' }}
                                repeat={Infinity}
                            />
                        </h3>
                        <small className='text-white border-b'>Front-end Alchemist: Turning Code into Gold.</small>
                    </div>
                    <div className="space-x-5">
                        <button data-aos="fade-right" data-aos-duration="2000" className="primary-btn py-10">Hire Me</button>
                        <button data-aos="fade-left" data-aos-duration="2000" className="secondary-btn">resume</button>
                    </div>
                </div>

                {/* =========================================================hero Photo */}
                {/* <div className='m-4 pb-4 h-auto'>
                        <img className='rounded-full ring-8 ring-sky-500  transition ring-offset-8' src={heroImg} alt="" />
                    </div> */}


                {/* <div>
                    <div className='important-links text-2xl md:space-y-4 space-y-0   flex md:flex-col md:items-start items-center absolute top-[130px] left-20 text-[var(--secondary-color)]'>
                        <button><FaGithub /></button>
                        <button><FaLinkedin /></button>
                        <button><FaGooglePlusSquare /></button>
                        <button><FaFacebookSquare /></button>
                    </div>
                    <SubTitle subTitle="Follow me"></SubTitle>
                </div> */}


            </div>
            <div className='hidden md:block fixed bottom-10 right-[5%]'>
                <SocialLinks></SocialLinks>
            </div>
        </section>

    );
};


export default Hero;