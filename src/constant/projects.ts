export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#"
  },
  // Add more projects
]