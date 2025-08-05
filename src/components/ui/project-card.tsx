import { motion } from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo?: string;
}

interface ProjectCardProps {
    project: Project;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "TextUtility",
    description: "A cutting-edge text manipulation and enhancement app built with React.js. Features comprehensive text analysis and transformation tools.",
    tags: ["React", "JavaScript", "Text Processing"],
    github: "https://github.com/Shubham-Pawar-99/textutility",
    demo: "#"
  },
  {
    id: 2,
    title: "DailyInsights",
    description: "A dynamic news application built with React.js that provides real-time access to diverse news articles across various categories.",
    tags: ["React", "JavaScript", "News API"],
    github: "https://github.com/Shubham-Pawar-99/DailyInsights",
    demo: "#"
  },
  {
    id: 3,
    title: "Journal App",
    description: "Spring Boot backend with MongoDB, featuring authentication and role-based access control using Spring Security.",
    tags: ["Java", "Spring Boot", "MongoDB", "Spring Security"],
    github: "https://github.com/Shubham-Pawar-99/journalApp",
  },
  {
    id: 4,
    title: "Smart Contacts",
    description: "Web application for managing contacts with add/edit/delete functionality, built with Spring Boot backend.",
    tags: ["Java", "Spring Boot", "HTML", "Contact Management"],
    github: "https://github.com/Shubham-Pawar-99/Smart-Contacts",
  },
  {
    id: 5,
    title: "GitHub Profile",
    description: "Configuration and setup files for my GitHub profile showcasing my projects and contributions.",
    tags: ["GitHub", "Profile", "Configuration"],
    github: "https://github.com/Shubham-Pawar-99",
  }
];

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 p-6 h-full flex flex-col"
        >
            <div className="flex-grow">
                <h3 className="text-xl font-bold dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex gap-3 mt-auto">
                <a
                    href={project.github}
                    className="flex-1 py-2 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-center font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Code
                </a>
                {project.demo && (
                    <a
                        href={project.demo}
                        className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </motion.div>
    );
};