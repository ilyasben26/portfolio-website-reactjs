const ProjectsLists = () => {
    const projects = [
        {
            id: 1,
            title: "Ilyas-Recon",
            description: `A comprehensive reconnaissance tool 
            designed for subdomain enumeration, 
            DNS validation, import/export of subdomains, 
            and backup operations.`,
            imageUrl: "/images/projects/ilyas-recon.png",
            verifyLink: "https://github.com/ilyasben26/ilyas-recon"
        },
        {
            id: 2,
            title: "anmeldung-jaeger.com",
            description: `A fully serverless solution for checking the availability of Wohnungsanmeldung
appointments throughout Germany using a web scraper made in Python.`,
            imageUrl: "/images/projects/aj.png",
            verifyLink: "https://github.com/ilyasben26/aws-anmeldung-jaeger-terraform"
        }

    ];

    return (
        <div className='p-6 bg-gray-100 dark:bg-[#323131] rounded-xl'>

            {projects.map(project => (
                <div key={project.id} className='bg-white  dark:bg-[#3c3a3a] dark:border-[#323131] border-2 rounded-lg my-6 flex items-center p-4 shadow-sm'>
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-20 h-20 object-scale-down rounded-md mr-4"
                    />
                    <div className="mr-2">
                        <h2 className="text-l font-semibold text-gray-700 dark:text-white">{project.title}</h2>
                        <p className="text-sm text-gray-600 dark:text-neutral-400 mr-1">{project.description}</p>
                    </div>
                    <a className="ml-auto" href={project.verifyLink} target="_blank" rel="noopener noreferrer">
                        <button
                            className="text-gray-400 hover:text-gray-700 dark:text-white relative bg-white dark:bg-[#3c3a3a] dark:border-[#323131] text-xs py-2 px-4 rounded-lg flex items-center border-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
                        >
                            Code
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ProjectsLists;
