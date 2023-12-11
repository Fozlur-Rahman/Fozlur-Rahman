import SubTitle from "../../components/SubTitle/SubTitle";
import { FaLaptopCode } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";




const Hobbies = () => {
    return (
        <section className="my-20">
            <div className="section-container">
                <div>
                    <SubTitle subTitle="Love to do"></SubTitle>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5 py-4">
                    <div className="hobby shadow-lg bg-[var(--secondary-color)] p-4 rounded">
                        <FaLaptopCode className="text-8xl text-[var(--primary-color)]" />
                        <h3 className="text-2xl mt-3 font-semibold text-white">Coding</h3>
                    </div>
                    <div className="hobby shadow-lg bg-[var(--secondary-color)] p-4 rounded">
                        <SiYourtraveldottv className="text-8xl text-[var(--primary-color)]" />
                        <h3 className="text-2xl mt-3 font-semibold text-white">Traveling</h3>
                    </div>
                    <div className="hobby shadow-lg bg-[var(--secondary-color)] p-4 rounded">
                        <TfiWrite className="text-8xl text-[var(--primary-color)]" />
                        <h3 className="text-2xl mt-3 font-semibold text-white">Blogging</h3>
                    </div>
                    <div className="hobby shadow-lg bg-[var(--secondary-color)] p-4 rounded">
                        <FaLaptopCode className="text-8xl text-[var(--primary-color)]" />
                        <h3 className="text-2xl mt-3 font-semibold text-white">Fucking</h3>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Hobbies;