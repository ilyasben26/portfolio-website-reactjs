import { FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: "AWS Certified Solutions Architect - Associate",
            subtitle: "Credential ID: 6SCMR3BJYMV11HS5",
            imageUrl: "/images/certifications/sa-cert.png",
            verifyLink: "https://www.credly.com/badges/3246c6c4-2023-4d0a-981d-f7396bd97a5e/public_url"
        },
        {
            id: 2,
            title: "AWS Certified Cloud Practitioner",
            subtitle: "Credential ID: LYXHWZCJ5MFEQZKT",
            imageUrl: "/images/certifications/cpf-cert.png",
            verifyLink: "https://www.credly.com/badges/ca3cafd4-08ee-4dde-888f-eab6c694b749/public_url"
        },
        {
            id: 3,
            title: "Google Cybersecurity Certificate",
            subtitle: "",
            imageUrl: "/images/certifications/gcsc-cert.png",
            verifyLink: "https://www.credly.com/badges/f5853330-463e-4ea8-a524-5558f76074f2"
        }

    ];

    return (
        <div className='p-6 bg-gray-100 rounded-xl'>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-4"></span>
                    <h1 className="text-lg">Certifications</h1>
                </div>
                <a href="https://www.credly.com/users/ilyas-benyamna" target="_blank" rel="noopener noreferrer">
                    <button
                        className="relative text-gray-400 hover:text-gray-700 bg-white text-xs py-2 px-4 rounded-lg flex items-center border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                    >
                        View All
                        <div className='ml-2'><FaExternalLinkAlt /></div>
                    </button>
                </a>
            </div>
            {certifications.map(cert => (
                <div key={cert.id} className='bg-white  border-2 rounded-lg my-6 flex items-center p-4 shadow-sm'>
                    <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div>
                        <h2 className="text-l font-semibold text-gray-700">{cert.title}</h2>
                        <p className="text-sm text-gray-600">{cert.subtitle}</p>
                    </div>
                    <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                        <button
                            className="ml-auto text-gray-400 hover:text-gray-700 relative bg-white text-xs py-2 px-4 rounded-lg flex items-center border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                        >
                            Verify
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Certifications;
