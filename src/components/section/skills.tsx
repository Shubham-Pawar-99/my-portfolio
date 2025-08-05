import { motion } from 'framer-motion'
import { FaGitAlt, FaGithubAlt, FaJava, FaReact } from 'react-icons/fa'
import { SiCss3, SiHtml5, SiJavascript, SiTailwindcss, SiTypescript } from 'react-icons/si'

type SkillCategory = {
    name: string
    skills: Skill[]
}

type Skill = {
    name: string
    level: number
    icon?: JSX.Element
    color?: string
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        name: 'Frontend',
        skills: [
            { name: 'HTML', level: 90, icon: <SiHtml5 className="text-orange-400" />, color: 'bg-orange-400' },
            { name: 'CSS', level: 85, icon: <SiCss3 className="text-blue-400" />, color: 'bg-blue-300' },
            { name: 'JavaScript', level: 80, icon: <SiJavascript className="text-yellow-400" />, color: 'bg-black dark:bg-white' },
            { name: 'React', level: 90, icon: <FaReact className="text-blue-500" />, color: 'bg-blue-500' },
            { name: 'TypeScript', level: 85, icon: <SiTypescript className="text-blue-600" />, color: 'bg-blue-600' },
            { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="text-cyan-400" />, color: 'bg-cyan-400' },
        ]
    },
    {
        name: 'Backend',
        skills: [
            { name: 'Java', level: 85, icon: <FaJava className="text-purple-500" />, color: 'bg-purple-500' },
            { name: 'Spring-Boot', level: 80, color: 'bg-green-500' },
            { name: 'MySQL', level: 85, color: 'bg-green-600' }
        ]
    },
    {
        name: 'Tools',
        skills: [
            { name: 'Git', level: 90, icon: <FaGitAlt className="text-orange-600" />, color: 'bg-orange-600' },
            { name: 'GitHub', level: 95, icon: <FaGithubAlt className="text-purple-600" />, color: 'bg-purple-600' },
            { name: 'VS Code', level: 95, color: 'bg-blue-400' },
            { name: 'Figma', level: 70, color: 'bg-purple-400' },
            { name: 'Postman', level: 85, color: 'bg-orange-400' }
        ]
    }
]

const SkillBar = ({ level, color }: { level: number; color?: string }) => (
    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`h-full ${color || 'bg-blue-500'} rounded-full`}
        />
    </div>
)

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12 dark:text-white"
                >
                    My <span className="text-blue-600">Skills</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {SKILL_CATEGORIES.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4 dark:text-white">{category.name}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-2">
                                                {skill.icon && (
                                                    <div className="text-lg">{skill.icon}</div>
                                                )}
                                                <span className="font-medium dark:text-gray-300">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                        </div>
                                        <SkillBar level={skill.level} color={skill.color} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}