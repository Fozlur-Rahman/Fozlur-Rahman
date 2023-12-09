import './SubTitle.css';


const SubTitle = ({ subTitle }) => {
    return (
        <div className="sub-title absolute bottom-[200px] left-[-10%] flex items-center high-light-text  ms-20 ">
            <h2 className="text-xl bg-[var(--secondary-color)] py-1 px-2 rounded uppercase me-2">{subTitle}</h2>
            <hr className="w-20 " />
        </div>
    );
};

export default SubTitle;