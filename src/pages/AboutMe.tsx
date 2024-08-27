
import Profile from "../components/Profile"
import Certifications from "../components/Certifications";
import Languages from "../components/Languages";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";
import CallToActionContact from "../components/CallToActionContact";


export default function AboutMe() {

    return (

        <div className="rounded-xl bg-white p-2 shadow-md max-w-xl mx-auto mt-2 mb-16">
            <Profile />
            <Certifications />
            <Languages />
            <Skills />
            <CallToActionContact />
            <section id="contact-me">
                <ContactMe />
            </section>

        </div >


    );
}
