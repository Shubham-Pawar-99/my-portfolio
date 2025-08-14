import { motion } from "framer-motion";
import { FaGitAlt, FaGithubAlt, FaJava, FaReact } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiMysql,
  SiFigma,
  SiPostman
} from "react-icons/si";
import type { ReactNode } from "react";

// Types
type SkillCategory = {
  name: string;
  skills: Skill[];
};

type Skill = {
  name: string;
  level: number;
  icon?: ReactNode;
  color?: string;
};

// Centralized icon map (consistent size & style)
const ICONS: Record<string, ReactNode> = {
  HTML: <SiHtml5 className="text-orange-400 text-xl" />,
  CSS: <SiCss3 className="text-blue-400 text-xl" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-xl" />,
  React: <FaReact className="text-blue-500 text-xl" />,
  TypeScript: <SiTypescript className="text-blue-600 text-xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-xl" />,
  Java: <FaJava className="text-purple-500 text-xl" />,
  "Spring-Boot": <SiSpringboot className="text-green-500 text-xl" />,
  MySQL: <SiMysql className="text-blue-500 text-xl" />,
  Git: <FaGitAlt className="text-orange-600 text-xl" />,
  GitHub: <FaGithubAlt className="text-purple-600 text-xl" />,
  "VS Code": <VscCode className="text-blue-400 text-xl" />,
  Figma: <SiFigma className="text-purple-400 text-xl" />,
  Postman: <SiPostman className="text-orange-400 text-xl" />
};

// Data
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", level: 90, color: "bg-orange-400" },
      { name: "CSS", level: 85, color: "bg-blue-300" },
      { name: "JavaScript", level: 80, color: "bg-black dark:bg-white" },
      { name: "React", level: 90, color: "bg-blue-500" },
      { name: "TypeScript", level: 85, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 95, color: "bg-cyan-400" }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Java", level: 85, color: "bg-purple-500" },
      { name: "Spring-Boot", level: 80, color: "bg-green-500" },
      { name: "MySQL", level: 85, color: "bg-green-600" }
    ]
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 90, color: "bg-orange-600" },
      { name: "GitHub", level: 95, color: "bg-purple-600" },
      { name: "VS Code", level: 95, color: "bg-blue-400" },
      { name: "Figma", level: 70, color: "bg-purple-400" },
      { name: "Postman", level: 85, color: "bg-orange-400" }
    ]
  }
];

const SkillBar = ({ level, color }: { level: number; color?: string }) => (
  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`h-full ${color || "bg-blue-500"} rounded-full`}
    />
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {ICONS[skill.name] || null}
                        <span className="font-medium dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
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
  );
}
