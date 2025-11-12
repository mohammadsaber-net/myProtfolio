import { FaCodepen,FaReact,FaAngular,FaBootstrap,FaCss3Alt,FaHtml5,FaGitAlt,FaGithub,FaDatabase } from "react-icons/fa";
import { 
  
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiVercel,
  SiRender,
  SiMongodb
} from "react-icons/si";

export const Nav=[
    {id:1,url:"#Service",label:"Service"},
    {id:2,url:"#Skills",label:"Skills"},
    {id:3,url:"#Projects",label:"Projects"},
    {id:4,url:"#",label:"About"},
    {id:5,url:"#",label:"Contact"},
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
    {id:1,icon:FaHtml5,title:"HTML",level:"medium"},
    {id:2,icon:FaCss3Alt,title:"CSS",level:"medium"},
    {id:3,icon:SiJavascript,title:"Javascript",level:"medium"},
    {id:4,icon:SiTypescript,title:"Typescript",level:"medium"},
    {id:5,icon:SiMongodb,title:"MongoDB",level:"medium"},
    {id:6,icon:SiNextdotjs,title:"Next.js",level:"medium"},
    {id:7,icon:FaReact,title:"React.js",level:"medium"},
    {id:8,icon:FaAngular,title:"Angular.js",level:"medium"},
    {id:9,icon:FaBootstrap,title:"Bootstrap",level:"medium"},
    {id:10,icon:FaGitAlt,title:"Git",level:"medium"},
    {id:11,icon:SiTailwindcss,title:"TailwindCss",level:"medium"},
    {id:12,icon:FaGithub,title:"GitHub",level:"medium"},
    {id:13,icon:SiRedux,title:"Redux",level:"medium"},
    {id:14,icon:SiVercel,title:"Vercel",level:"medium"},
    {id:15,icon:SiRender,title:"Render",level:"medium"},
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