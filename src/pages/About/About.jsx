import fozlurImg from '../../assets/images/hero/hero.png';
import SubTitle from '../../components/SubTitle/SubTitle';

const About = () => {
    return (
        <section id='about' className='my-20'>
            <div className="section-container py-10">
                <div>
                    <SubTitle subTitle="about"></SubTitle>
                </div>
                <div className='w-full h-auto flex flex-col-reverse  md:flex-row justify-between items-center'>
                    <div className="about-info w-full md:w-[50%] text-center md:text-start">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum
                            saepe, nesciunt cumque numquam temporibus repellat, repellendus accusamus,
                            magnam maxime omnis? Maiores mollitia nisi est possimus at quaerat, eius
                            veniam?
                        </p>

                        <div className="space-x-5 mt-10">
                            <button className="primary-btn">Hire Me</button>
                            <button className="secondary-btn">resume</button>
                        </div>
                    </div>
                    <div className='w-full md:w-[50%] p-4 mb-12 md:mb-0'>
                        <img
                            className='mx-auto md:ms-auto rounded-full ring-8 ring-sky-500 transition ring-offset-8'
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
