import { FaCodepen,FaServer ,FaReact,FaAngular,FaBootstrap,FaCss3Alt,FaHtml5,FaGitAlt,FaGithub,FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiVercel,
  SiRender,
  SiMongodb,
  SiNodedotjs 
} from "react-icons/si";
import Blog from "@/components/blog/Blog";
import {MERNstack,WebsiteImportance} from "@/components/blogDetails/blogsBody";
export const Nav=[
    {id:1,url:"#Service",label:"Service"},
    {id:3,url:"#Projects",label:"Projects"},
    {id:2,url:"#Skills",label:"Work-experience"},
    {id:6,url:"#Blog",label:"Blog"},
    {id:5,url:"#Contact",label:"Hire Me"},
]
export const Services = [
  {
    id: 1,
    image: "/images/s1.webp",
    title: "Frontend Development",
    info: "Building responsive, modern, and user-friendly interfaces using React and Next.js.",
  },
  {
    id: 2,
    image: "/images/s2.webp",
    title: "Backend Development",
    info: "Creating secure, scalable APIs with Node.js, Express, and database integrations.",
  },
  {
    id: 3,
    image: "/images/s4.webp",
    title: "Full-Stack Web Applications",
    info: "Delivering complete web solutions from UI to database with optimized performance.",
  },
  {
    id: 4,
    image: "/images/s3.webp",
    title: "UI Implementation",
    info: "Translating UI/UX designs into high-quality, pixel-perfect code using Tailwind CSS.",
  }
];

export const canWorkAt = [
  {
    id: 1,
    icon: FaCodepen,
    title: "Problem Solving",
    info: "Analyzing problems and building efficient, scalable solutions using modern web technologies.",
  },
  {
    id: 2,
    icon: FaReact,
    title: "Frontend Engineering",
    info: "Implementing clean, accessible, and optimized interfaces with React, Next.js, and Tailwind CSS.",
  },
  {
    id: 3,
    icon: FaDatabase,
    title: "Backend Engineering",
    info: "Designing structured APIs, managing databases, and ensuring performance with Node.js and MongoDB.",
  }
];

export const usedTools=[
    {id:1,icon:FaHtml5,title:"HTML"},
    {id:2,icon:FaCss3Alt,title:"CSS"},
    {id:3,icon:SiJavascript,title:"Javascript"},
    {id:4,icon:SiTypescript,title:"Typescript"},
    {id:5,icon:SiMongodb,title:"MongoDB"},
    {id:6,icon:SiNextdotjs,title:"Next.js"},
    {id:7,icon:FaReact,title:"React.js"},
    {id:8,icon:FaAngular,title:"Angular.js"},
    {id:9,icon:FaBootstrap,title:"Bootstrap"},
    {id:10,icon:FaGitAlt,title:"Git"},
    {id:11,icon:SiTailwindcss,title:"TailwindCss"},
    {id:12,icon:FaGithub,title:"GitHub"},
    {id:13,icon:SiRedux,title:"Redux"},
    {id:14,icon:SiVercel,title:"Vercel"},
    {id:15,icon:SiRender,title:"Render"},
]
export const projects=[
    {
        id:1,
        title:"A Modern E-commerce Website",
        demo:"https://react-ecommerce-mocha-mu.vercel.app/",
        code:"https://github.com/mohammadsaber-net/react-ecommerce",
        image:"/images/store.png",
        tools:[FaHtml5,FaBootstrap,FaReact,SiMongodb,SiRedux,SiRender]
    },
    {
        id:2,
        title:"Mini-Facebook Website",
        demo:"https://mini-facebook-98.vercel.app/",
        code:"https://github.com/mohammadsaber-net/Mini-FaceBook",
        image:"/images/facebook.png",
        tools:[SiJavascript,SiTailwindcss,FaReact,SiMongodb,SiRedux,SiVercel]
    },
    {
        id:3,
        title:"A Super Class Portfolio",
        demo:"https://my-protfolio-one-delta.vercel.app/",
        code:"https://github.com/mohammadsaber-net/myProtfolio",
        image:"/images/portfolio.png",
        tools:[SiJavascript,SiNextdotjs,SiTailwindcss,FaReact,SiVercel]
    },

]
Blog 

export const blog=[
    {
        id:1,
        image:"/images/b1.webp",
        title:"why you should use MERN & next.js stack in your project ?",
        body:MERNstack,
        keyWords:[
            {Icon:SiNextdotjs,name:"Next.js"},
            {Icon:SiNodedotjs,name:"Node.js"},
            {Icon:SiMongodb,name:"MongoDB"},
            {Icon:SiJavascript,name:"Javascript"},
            {Icon:FaReact,name:"React.js"},
            {Icon:FaServer,name:"Express.js"}
        ]
    },
    {
        id:2,
        image:"/images/ecommerce.jpg",
        title:"importance of making a website for your project ex a ecommerce",
        body:WebsiteImportance,
        keyWords:[
            {Icon:SiNextdotjs,name:"Next.js"},
            {Icon:SiTailwindcss,name:"TailwindCss"},
            {Icon:SiNodedotjs,name:"Node.js"},
            {Icon:SiJavascript,name:"Javascript"},
            {Icon:SiMongodb,name:"MongoDB"},
        ]
    },
]