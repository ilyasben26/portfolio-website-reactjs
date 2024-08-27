
const Academics = () => {
    return (
        <div className='p-6 mt-2 bg-gray-100 rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-4"></span>
                    <h1 className="text-lg">University</h1>
                </div>
            </div>
            <div className='bg-white  border-2 rounded-lg my-6 flex items-center p-4 shadow-sm'>
                <img
                    src={"/images/education/cub-logo.png"}
                    alt={"Constructor"}
                    className="w-20 h-20 object-scale-down rounded-md mr-4"
                />
                <div>
                    <h2 className="text-l font-semibold text-gray-700">Constructor University Bremen / <br /> Jacobs University Bremen</h2>
                    <p className="text-sm text-gray-600">Bachelor of Science in Computer Science</p>
                    <p className="text-sm"> 2020 - 2023 </p>
                </div>

            </div>
        </div>
    );
};

export default Academics;
