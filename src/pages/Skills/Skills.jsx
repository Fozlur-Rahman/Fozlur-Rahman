import SubTitle from "../../components/SubTitle/SubTitle";

const comfortable = ["html", "css", "JavaScript", "Tailwind CSS", "Bootstrap", "React", "React Router", "REST API"];
const familiar = ["node.js", "express.js", "react Bootstrap", "JSON", "C/C++", "python", "React Router", "REST API"];
const tools = ["VS code", "git", "chrome dev tool", "firebase", "Netlify", "figma", "canva"];
const language = ["bangla", "english", "hindi"];

const Skills = () => {
    return (
        <section id="skills" className="mt-28  pt-20">
            <div className="section-container">
                <div>
                    <SubTitle subTitle="Skills" />
                </div>
                {/* <h2 className="text-3xl md:text-5xl text-white text-center">I am always eager to learning things</h2>
                <hr className="bg-white border-0 w-[20%] mx-auto h-1 mt-8" /> */}
                {/* ================= skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28 pt-16">
                    {/* ==============comfortable skills */}
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        className="">
                        <h2 className="text-2xl text-white mb-5 border-b inline-block">Comfortable</h2>
                        <div className="flex flex-wrap gap-2">
                            {comfortable.map((element, index) => (
                                <h2 className="bg-[var(--primary-color)] text-#020617 py-2 px-3 rounded text-xl capitalize" key={index}>{element}</h2>
                            ))}
                        </div>
                    </div>

                    {/* ==============Familiar skills */}
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        className="">
                        <h2 className="text-2xl text-white mb-5 border-b inline-block">Familiar</h2>
                        <div className="flex flex-wrap gap-2">
                            {familiar.map((element, index) => (
                                <h2 className="bg-[var(--primary-color)] text-#020617 py-2 px-3 rounded text-xl capitalize" key={index}>{element}</h2>
                            ))}
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        className="">
                        <h2 className="text-2xl text-white mb-5 border-b inline-block">Tools</h2>
                        <div className="flex flex-wrap gap-2">
                            {tools.map((element, index) => (
                                <h2 className="bg-[var(--primary-color)] text-#020617 py-2 px-3 rounded text-xl capitalize" key={index}>{element}</h2>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ==============language */}
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="mt-20">
                    <h2 className="text-2xl text-white mb-5 border-b inline-block">Language</h2>
                    <div className="flex flex-wrap gap-2">
                        {language.map((element, index) => (
                            <h2 className="bg-[var(--primary-color)] text-#020617 py-2 px-3 rounded text-xl capitalize" key={index}>{element}</h2>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
