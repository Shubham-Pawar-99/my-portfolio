export default function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
                About <span className="text-blue-600">Me</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        I'm a dedicated <span className="font-medium text-blue-600 dark:text-blue-400">React.js Developer</span> with an hands-on experience building interactive and responsive web applications. I specialize in creating efficient, maintainable React components with clean code architecture.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        My journey in frontend development began with a passion for creating seamless user experiences. I've since worked on various projects that helped me master modern React patterns, state management solutions, and performance optimization techniques.
                    </p>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold dark:text-white">My Core Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {['React.js', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'React Hooks',
                                'Tailwind CSS', 'Material UI', 'REST APIs', 'Git', 'Jest', 'React Testing Library'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                        </div>
                    </div>

                    <div className="pt-4">
                        <a
                            href="#contact"
                            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                        >
                            Let's Connect
                        </a>
                    </div>
                </div>

                <div className="flex justify-center relative">
                    <div className="relative">
                        <img
                            src="/Photo.png"
                            alt="Shubham Pawar"
                            className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md">
                            <span className="text-2xl">⚛️</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Timeline */}
            <div className="mt-20">
                <h3 className="text-2xl font-semibold mb-8 text-center dark:text-white">My Academic Journey</h3>
                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 h-full rounded-lg w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

                    <div className="space-y-8">
                        {[
                            // {
                            //     year: "January 2023 - Present",
                            //     role: "Software Engineer (React.js)",
                            //     company: "Web Crypt Technology",
                            //     description: "Developing and maintaining React applications with TypeScript, implementing new features, and optimizing performance."
                            // },
                            // {
                            //     year: "Augest 2022 - December 2022",
                            //     role: "Software Engineer Trainee",
                            //     company: "Web Crypt Technology",
                            //     description: "Developing and maintaining React applications with TypeScript, implementing new features, and optimizing performance."
                            // },
                            {
                                year: "2020 - 2022",
                                role: "Computer Application Post-Graduate (MCA)",
                                company: "Savitribai Phule Pune University",
                                description: "Specialized in Web Technologies and Software Development."
                            },
                            {
                                year: "2017 - 2020",
                                role: "Computer Science Graduate (B.Sc.)",
                                company: "Shivaji University, Kolhapur",
                                description: "Specialized in Web Technologies."
                            },
                            {
                                year: "2015 - 2017",
                                role: "Higher Secondary (HSC)",
                                company: "State Board, Maharashtra",
                                description: "Specialized in Science"
                            },
                            {
                                year: "2015",
                                role: "Secondary (SSC)",
                                company: "State Board, Maharashtra",
                                description: "Completed with First Class Honors"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}
                            >
                                <div className={`w-full md:w-1/2 p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-white dark:bg-gray-800 mr-auto' : 'bg-gray-50 dark:bg-gray-800/50 ml-auto'} border border-gray-100 dark:border-gray-700`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="hidden md:block w-3 h-3 rounded-full bg-blue-500 absolute left-1/2 transform -translate-x-1/2"></div>
                                        <span className="text-blue-600 dark:text-blue-400 font-medium">{item.year}</span>
                                    </div>
                                    <h4 className="text-lg font-semibold dark:text-white">{item.role}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 mb-2">{item.company}</p>
                                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Development Principles */}
            <div className="mt-20 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">My React Development Principles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: "🧩",
                            title: "Component Reusability",
                            description: "Building modular components with clear props interfaces"
                        },
                        {
                            icon: "📊",
                            title: "State Management",
                            description: "Implementing efficient state solutions for complex UIs"
                        },
                        {
                            icon: "⚡",
                            title: "Performance",
                            description: "Optimizing renders and bundle size for better UX"
                        }
                    ].map((principle, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl mb-4">{principle.icon}</div>
                            <h4 className="text-lg font-semibold dark:text-white mb-2">{principle.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300">{principle.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}