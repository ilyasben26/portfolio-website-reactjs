import Experiences from "../components/Experiences";

export default function Experience() {
    return (
        <div className="rounded-xl bg-white p-2 shadow-md max-w-xl mx-auto mt-2 mb-16 ">
            <div className="m-5 flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-4"></span>
                <h1 className="text-xl">Experience</h1>
            </div>
            <Experiences />
        </div >
    );
}