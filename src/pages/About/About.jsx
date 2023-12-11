import fozlurImg from '../../assets/images/hero/hero.png';
import SubTitle from '../../components/SubTitle/SubTitle';

const About = () => {
    return (
        <section id='about'>
            <div className="section-container pt-20">
                <div className=''>
                    <SubTitle subTitle="about"></SubTitle>
                </div>
                <div className='w-full h-auto flex flex-col-reverse  md:flex-row justify-between items-center mt-24'>
                    <div className="about-info w-full md:w-[50%] text-center md:text-start">
                        <h2 className='text-white text-4xl mb-6'>About Me</h2>
                        <p className=''>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum
                            saepe, nesciunt cumque numquam temporibus repellat, repellendus accusamus,
                            magnam maxime omnis? Maiores mollitia nisi est possimus at quaerat, eius
                            veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda eius accusantium accusamus, minima soluta numquam non voluptas quibusdam, velit ut a dignissimos laboriosam aperiam iure sapiente rem aut pariatur!
                        </p>
                        <div className="space-x-5 mt-10">
                            <button className="primary-btn">Hire Me</button>
                            <button className="secondary-btn">resume</button>
                        </div>
                    </div>
                    <div className=' p-8 mb-12 md:mb-0 '>
                        <img
                            style={{
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2), 0 0 30px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.2)',

                            }}
                            className=' bg-[var(--primary-color)] w-full ms-auto md:ms-auto rounded-full border border-[5px]'
                            src={fozlurImg}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
