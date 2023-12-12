import './SubTitle.css';


const SubTitle = ({ subTitle }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
            className="sub-title flex items-center high-light-text mx-auto w-80  mt-20">
            <hr className="w-20 h-[2px] bg-black" />
            <h2 className="text-xl bg-[var(--secondary-color)] py-1 px-2 rounded uppercase mx-2">{subTitle}</h2>
            <hr className="w-20 h-[2px] bg-black" />
        </div>
    );
};

export default SubTitle;