
interface project {
    id: number;
    title: string;
    desc: string;
    img: string;
    url?: string;
    tags: string[];
}



export const data: project[] = [
    {
        id: 0,
        title: "Static Resume Builder",
        desc: 'A html, css and Typescript based app for managing and building your resume statically.',
        img: '/project_01.jpg',
        url: 'https://static-resume-six.vercel.app/',
        tags: ["Html", "CSS", "Typescript", "Node"],
    },
    {
        id: 1,
        title: "Dynamic Resume Builder",
        desc: 'A html, css and Typescript based app for managing and building your resume dynamically.',
        img: '/project_02.jpg',
        url: 'https://dynamic-resume-two.vercel.app/',
        tags: ["Html", "CSS", "Typescript", "Node"],
    },
    {
         id: 2,
        title: "Zoom clone - Bloom",
        desc: 'A video conferencing app developed for meeting and online classes using typescript.',
        img: '/project_03.jpeg',
        url: 'https://zoom-clone-nopa.vercel.app',
        tags: ["Nextjs", "Tailwind", 'Typescript' ,'ClerkAuth'],
    }
];