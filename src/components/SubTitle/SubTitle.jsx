import './SubTitle.css';


const SubTitle = ({ subTitle }) => {
    return (
        <div className="sub-title flex items-center high-light-text mx-auto md:mx-0 mb-10 md:mb-0">
            <hr className="w-20 h-[2px] bg-black  md:hidden" />
            <h2 className="text-xl bg-[var(--secondary-color)] py-1 px-2 rounded uppercase me-2">{subTitle}</h2>
            <hr className="w-20 h-[2px] bg-black" />
        </div>
    );
};

export default SubTitle;