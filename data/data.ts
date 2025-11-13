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
    {id:2,url:"#Skills",label:"Skills"},
    {id:3,url:"#Projects",label:"Projects"},
    // {id:4,url:"#",label:"About"},
    {id:6,url:"#Blog",label:"Blog"},
    {id:5,url:"#Contact",label:"Contact"},
]
export const Services=[
    {id:1,image:"/images/s1.webp",title:"UI and UX",info:"Designing interfaces that are intuitive, efficient, and enjoyable to use."},
    {id:2,image:"/images/s2.webp",title:"Web and Mobile App",info:"Designing interfaces that are intuitive, efficient, and enjoyable to use."},
    {id:3,image:"/images/s3.webp",title:"Design & Creative",info:"Designing interfaces that are intuitive, efficient, and enjoyable to use."},
    {id:4,image:"/images/s4.webp",title:"Development",info:"Designing interfaces that are intuitive, efficient, and enjoyable to use."}
]
export const canWorkAt=[
    {id:1,icon:FaCodepen,title:"Full-Stack Developer",info:"Designing interfaces that are intuitive, efficient, and enjoyable to use."},
    {id:2,icon:FaReact,title:"Front-End Developer",info:"Designing interfaces that are intuitive, efficient, and enjoyable to use."},
    {id:3,icon:FaDatabase,title:"Backend Developer",info:"Designing interfaces that are intuitive, efficient, and enjoyable to use."}
]
export const usedTools=[
    {id:1,icon:FaHtml5,title:"HTML",level:"85"},
    {id:2,icon:FaCss3Alt,title:"CSS",level:"85"},
    {id:3,icon:SiJavascript,title:"Javascript",level:"85"},
    {id:4,icon:SiTypescript,title:"Typescript",level:"80"},
    {id:5,icon:SiMongodb,title:"MongoDB",level:"75"},
    {id:6,icon:SiNextdotjs,title:"Next.js",level:"75"},
    {id:7,icon:FaReact,title:"React.js",level:"85"},
    {id:8,icon:FaAngular,title:"Angular.js",level:"70"},
    {id:9,icon:FaBootstrap,title:"Bootstrap",level:"70"},
    {id:10,icon:FaGitAlt,title:"Git",level:"80"},
    {id:11,icon:SiTailwindcss,title:"TailwindCss",level:"85"},
    {id:12,icon:FaGithub,title:"GitHub",level:"85"},
    {id:13,icon:SiRedux,title:"Redux",level:"80"},
    {id:14,icon:SiVercel,title:"Vercel",level:"80"},
    {id:15,icon:SiRender,title:"Render",level:"80"},
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