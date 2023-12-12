import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";


const Admin = () => {
    return (
        <section className=" text-white">
            <div className="section-container lg:flex md:gap-10 mt-10">
                <AdminNav></AdminNav>
                <div className="bg-[var(--secondary-color)] w-[100%] p-20">
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default Admin;