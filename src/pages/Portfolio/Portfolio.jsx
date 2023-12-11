import { useState } from "react";
import SubTitle from "../../components/SubTitle/SubTitle";
import card1 from '../../assets/images/portfolio/card1.png'
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";



const Portfolio = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <section id="portfolio" className=" py-20 my-20">
            <div className="section-container">
                <div className="mb-20">
                    <SubTitle subTitle="Portfolio"></SubTitle>
                </div>

                {/* ======================portfolio tabs */}
                <div>
                    <div className="w-full mt-8 ">
                        {/* =====================tab buttons */}
                        <div className="flex space-x-4 text-[var(--secondary-color)]">
                            <button
                                className={`px-4 py-2 border-2 border-[var(--primary-color)] rounded capitalize ${activeTab === 1 ? 'bg-[var(--primary-color)]' : ''}`}
                                onClick={() => handleTabClick(1)}
                            >
                                web
                            </button>
                            <button
                                className={`px-4 py-2 border-2 border-[var(--primary-color)] capitalize rounded ${activeTab === 2 ? 'bg-[var(--primary-color)]' : ''}`}
                                onClick={() => handleTabClick(2)}
                            >
                                others
                            </button>

                        </div>


                        {/* =====================tabs contents */}
                        <div className="mt-4">
                            {/* ====================web contents */}
                            {activeTab === 1 && <div className="w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                    {/*======================= tab card */}
                                    <div className="bg-white pb-0 rounded">
                                        <div className="overflow-hidden">
                                            <img className="border-box  transition-transform transform hover:scale-110 duration-500 overflow-hidden" src={card1} alt="" />
                                        </div>
                                        <div className="p-6">
                                            <div className=" font-bold">
                                                <h2 className="text-[var(--primary-color)] text-xl"> My Portfolio</h2>
                                                <p className="my-3 font-semibold text-[var(--secondary-color)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam totam suscipit saepe adipisci, molestias ab. Est dicta iure id!</p>

                                                <div className="flex space-x-4 items-center">
                                                    <a className="text-xl" href="#"><FaExternalLinkAlt className="hover:text-[var(--primary-color)] transition" /></a>
                                                    <a className="text-2xl" href="#"><FaGithubSquare className="hover:text-[var(--primary-color)] transition" /></a>
                                                </div>
                                            </div>
                                            <div className="flex space-x-4 mt-4 capitalize">
                                                <p>html</p>
                                                <p>css</p>
                                                <p>JavaScript</p>
                                                <p>react</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*======================= tab card */}
                                    <div className="bg-white pb-0 rounded">
                                        <div className="overflow-hidden">
                                            <img className="border-box  transition-transform transform hover:scale-110 duration-500 overflow-hidden" src={card1} alt="" />
                                        </div>
                                        <div className="p-6">
                                            <div className=" font-bold">
                                                <h2 className="text-[var(--primary-color)] text-xl"> My Portfolio</h2>
                                                <p className="my-3 font-semibold text-[var(--secondary-color)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam totam suscipit saepe adipisci, molestias ab. Est dicta iure id!</p>

                                                <a className="text-xl" href="#"><FaExternalLinkAlt className="hover:text-[var(--primary-color)] transition" /></a>
                                            </div>
                                            <div className="flex space-x-4 mt-4 capitalize">
                                                <p>html</p>
                                                <p>css</p>
                                                <p>JavaScript</p>
                                                <p>react</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*======================= tab card */}
                                    <div className="bg-white pb-0 rounded">
                                        <div className="overflow-hidden">
                                            <img className="border-box  transition-transform transform hover:scale-110 duration-500 overflow-hidden" src={card1} alt="" />
                                        </div>
                                        <div className="p-6">
                                            <div className=" font-bold">
                                                <h2 className="text-[var(--primary-color)] text-xl"> My Portfolio</h2>
                                                <p className="my-3 font-semibold text-[var(--secondary-color)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam totam suscipit saepe adipisci, molestias ab. Est dicta iure id!</p>

                                                <a className="text-xl" href="#"><FaExternalLinkAlt className="hover:text-[var(--primary-color)] transition" /></a>
                                            </div>
                                            <div className="flex space-x-4 mt-4 capitalize">
                                                <p>html</p>
                                                <p>css</p>
                                                <p>JavaScript</p>
                                                <p>react</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*======================= tab card */}
                                    <div className="bg-white pb-0 rounded">
                                        <div className="overflow-hidden">
                                            <img className="border-box  transition-transform transform hover:scale-110 duration-500 overflow-hidden" src={card1} alt="" />
                                        </div>
                                        <div className="p-6">
                                            <div className=" font-bold">
                                                <h2 className="text-[var(--primary-color)] text-xl"> My Portfolio</h2>
                                                <p className="my-3 font-semibold text-[var(--secondary-color)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam totam suscipit saepe adipisci, molestias ab. Est dicta iure id!</p>

                                                <a className="text-xl" href="#"><FaExternalLinkAlt className="hover:text-[var(--primary-color)] transition" /></a>
                                            </div>
                                            <div className="flex space-x-4 mt-4 capitalize">
                                                <p>html</p>
                                                <p>css</p>
                                                <p>JavaScript</p>
                                                <p>react</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>}

                            {/*========================== others tab content */}
                            {activeTab === 2 && <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                    {/*======================= tab card */}
                                    <div className="bg-white pb-0 rounded">
                                        <div className="overflow-hidden">
                                            <img className="border-box  transition-transform transform hover:scale-110 duration-500 overflow-hidden" src={card1} alt="" />
                                        </div>
                                        <div className="p-6">
                                            <div className=" font-bold">
                                                <h2 className="text-[var(--primary-color)] text-xl"> My Portfolio</h2>
                                                <p className="my-3 font-semibold text-[var(--secondary-color)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam totam suscipit saepe adipisci, molestias ab. Est dicta iure id!</p>

                                                <div className="flex space-x-4 items-center">
                                                    <a className="text-xl" href="#"><FaExternalLinkAlt className="hover:text-[var(--primary-color)] transition" /></a>
                                                    <a className="text-2xl" href="#"><FaGithubSquare className="hover:text-[var(--primary-color)] transition" /></a>
                                                </div>
                                            </div>
                                            <div className="flex space-x-4 mt-4 capitalize">
                                                <p>html</p>
                                                <p>css</p>
                                                <p>JavaScript</p>
                                                <p>react</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*======================= tab card */}
                                    <div className="bg-white pb-0 rounded">
                                        <div className="overflow-hidden">
                                            <img className="border-box  transition-transform transform hover:scale-110 duration-500 overflow-hidden" src={card1} alt="" />
                                        </div>
                                        <div className="p-6">
                                            <div className=" font-bold">
                                                <h2 className="text-[var(--primary-color)] text-xl"> My Portfolio</h2>
                                                <p className="my-3 font-semibold text-[var(--secondary-color)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam totam suscipit saepe adipisci, molestias ab. Est dicta iure id!</p>

                                                <a className="text-xl" href="#"><FaExternalLinkAlt className="hover:text-[var(--primary-color)] transition" /></a>
                                            </div>
                                            <div className="flex space-x-4 mt-4 capitalize">
                                                <p>html</p>
                                                <p>css</p>
                                                <p>JavaScript</p>
                                                <p>react</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*======================= tab card */}
                                    <div className="bg-white pb-0 rounded">
                                        <div className="overflow-hidden">
                                            <img className="border-box  transition-transform transform hover:scale-110 duration-500 overflow-hidden" src={card1} alt="" />
                                        </div>
                                        <div className="p-6">
                                            <div className=" font-bold">
                                                <h2 className="text-[var(--primary-color)] text-xl"> My Portfolio</h2>
                                                <p className="my-3 font-semibold text-[var(--secondary-color)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam totam suscipit saepe adipisci, molestias ab. Est dicta iure id!</p>

                                                <a className="text-xl" href="#"><FaExternalLinkAlt className="hover:text-[var(--primary-color)] transition" /></a>
                                            </div>
                                            <div className="flex space-x-4 mt-4 capitalize">
                                                <p>html</p>
                                                <p>css</p>
                                                <p>JavaScript</p>
                                                <p>react</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*======================= tab card */}
                                    <div className="bg-white pb-0 rounded">
                                        <div className="overflow-hidden">
                                            <img className="border-box  transition-transform transform hover:scale-110 duration-500 overflow-hidden" src={card1} alt="" />
                                        </div>
                                        <div className="p-6">
                                            <div className=" font-bold">
                                                <h2 className="text-[var(--primary-color)] text-xl"> My Portfolio</h2>
                                                <p className="my-3 font-semibold text-[var(--secondary-color)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam totam suscipit saepe adipisci, molestias ab. Est dicta iure id!</p>

                                                <a className="text-xl" href="#"><FaExternalLinkAlt className="hover:text-[var(--primary-color)] transition" /></a>
                                            </div>
                                            <div className="flex space-x-4 mt-4 capitalize">
                                                <p>html</p>
                                                <p>css</p>
                                                <p>JavaScript</p>
                                                <p>react</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Portfolio;