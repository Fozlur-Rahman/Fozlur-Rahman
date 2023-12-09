import heroImg from '../../assets/images/hero/hero.png';
import SubTitle from '../../components/SubTitle/SubTitle';
import { FaLinkedin } from "react-icons/fa6";
import { FaGooglePlusSquare, FaFacebookSquare, FaGithub } from "react-icons/fa";






const Hero = () => {
    return (
        <section className="bg-slate-950 md:h-[70vh] py-20 relative">

            <div className="section-container h-full md:flex md:justify-between md:items-center space-y-20">
                {/* =========================================================hero content */}
                <div className="space-y-5">
                    <div>
                        <p className='high-light-text'>Hello! I am</p>
                        <h1 className="text-5xl font-bold mt-1 text-white">Fozlur Rahman (Zishan)</h1>
                    </div>
                    <div>
                        <h3 className="text-2xl high-light-text">Front-End-Developer</h3>
                        <small className='text-white border-b'>Front-end Alchemist: Turning Code into Gold.</small>
                    </div>
                    <div className="space-x-5">
                        <button className="primary-btn">Hire Me</button>
                        <button className="secondary-btn">resume</button>
                    </div>
                </div>

                {/* =========================================================hero Photo */}
                <div className='m-4 mb-4 h-auto'>
                    <img className='rounded-full ring-8 ring-sky-500  transition ring-offset-8' src={heroImg} alt="" />
                </div>
            </div>

            <div className='important-links text-2xl md:space-y-4 space-y-0   flex md:flex-col md:items-start items-center absolute top-[130px] left-24 text-[var(--secondary-color)]'>
                <button><FaGithub /></button>
                <button><FaLinkedin /></button>
                <button><FaGooglePlusSquare /></button>
                <button><FaFacebookSquare /></button>



            </div>
            <SubTitle subTitle="Follow me"></SubTitle>


        </section>
    );
};

export default Hero;