import Academics from "../components/Academics";
import EducationPhilosophy from "../components/EducationPhilosophy";
import Publications from "../components/Publications";
import ThmBadge from "../components/ThmBadge";

export default function Education() {
    return (
        <div className="rounded-xl bg-white dark:bg-neutral-800 p-2 shadow-md max-w-xl mx-auto mt-2 mb-16 ">
            <EducationPhilosophy />
            <Academics />
            <ThmBadge />
            <Publications />

        </div >
    );
}