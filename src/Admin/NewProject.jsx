

const NewProject = () => {
    return (
        <div className="bg-[var(--body-color)] p-16 rounded">
            <h2 className="text-2xl text-center mb-16 ">Create a new things</h2>
            <form className="uppercase">
                <div className="form-group mb-5">
                    <label htmlFor="formGroupExampleInput">Project Name:</label> <br />
                    <input type="text" className="form-control w-full px-4 py-2 outline-none bg-[var(--secondary-color)] mt-1 rounded" id="formGroupExampleInput" placeholder="Enter Projects Name" />
                </div>
                <div className="form-group mb-5">
                    <label htmlFor="formGroupExampleInput">Technologies:</label> <br />
                    <input type="text" className="form-control w-full px-4 py-2 outline-none bg-[var(--secondary-color)] mt-1 rounded" id="formGroupExampleInput" placeholder="Enter Technologies" />
                </div>

                <div className="md:flex justify-between gap-5">
                    <div className="form-group mb-5 w-full">
                        <label htmlFor="formGroupExampleInput">Category:</label> <br />
                        <input type="text" className="form-control w-full px-4 py-2 outline-none bg-[var(--secondary-color)] mt-1 rounded" id="formGroupExampleInput" placeholder="Enter Category" />
                    </div>
                    <div className="form-group mb-5 w-full">
                        <label htmlFor="formGroupExampleInput">Project Track:</label> <br />
                        <input type="text" className="form-control w-full px-4 py-2 outline-none bg-[var(--secondary-color)] mt-1 rounded" id="formGroupExampleInput" placeholder="Enter Project Track" />
                    </div>
                </div>
                <div className="form-group mb-5">
                    <label htmlFor="formGroupExampleInput">Projects Banner:</label> <br />
                    <input type="file" className="form-control w-full px-4 py-2 outline-none bg-[var(--secondary-color)] mt-1 rounded" id="formGroupExampleInput" placeholder="Enter Technologies" />
                </div>
                <button className="bg-green-800 px-4 py-2 rounded">Create New</button>


            </form>

        </div>
    );
};

export default NewProject;