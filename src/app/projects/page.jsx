import { Anton, DM_Sans } from "next/font/google";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});
const sans = DM_Sans({
  weight: ["300"],
  subsets: ["latin"],
});
export default function Projects() {
  return (
    <div className="bg-black h-fit  py-6 px-10 sm:px-32 md:px-32">
      <div className="flex flex-col gap-3 items-center">
        <h1 className={`${anton.className} text-7xl  text-white `}>Projects</h1>
        <p className={`${sans.className} text-lg  text-white`}>Check out my work!</p>
      </div>
      <div className=" px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3  text-white`}>Food Delivery App</h1>
        <div>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">React.js</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">Vite</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">JavaScript</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">CSS3</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">HTML5</p>
        </div>
        <p className={`${sans.className}  text-white`}>
        Developed a responsive food delivery web app using React.js with Vite, featuring modular components like dynamic headers and menus. Implemented real-time cart management and state management with React Context API. Deployed on Netlify.
        </p>
        <div className="flex justify-end gap-4 mt-3">
          <Link href={"https://bingeeat.netlify.app/"} target="_blank">
            <FaExternalLinkAlt
              size={23}
              className={`hover:scale-110 transition-all duration-200  text-white`}
            />
          </Link>
          <Link
            href={"https://github.com/RajVeer36399/Food-Delivery-App"}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200  text-white"
            />
          </Link>
          
        </div>
      </div>
      <div className=" px-6 py-5 border border-solid border-slate-500 mt-7 rounded-xl">
        <h1 className={`${anton.className} text-3xl mb-3  text-white`}>To-Do List App</h1>
        <div>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">JavaScript</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">CSS3</p>
          <p className="bg-blackborder border-solid border-slate-500  bg-black font-medium inline-block mr-2 py-1 px-2 rounded-full text-xs text-white mb-2 ">HTML5</p>
        </div>
        <p className={`${sans.className}  text-white`}>
        Built a user-friendly To-Do List app with core functionalities for adding, editing, and deleting tasks. Integrated task completion toggles and local storage for data persistence.
        </p>
        <div className="flex justify-end gap-4 mt-3">
        <Link href={"https://checkmate-simple.netlify.app/"} target="_blank">
            <FaExternalLinkAlt
              size={23}
              className={`hover:scale-110 transition-all duration-200  text-white`}
            />
          </Link>
          <Link
            href={"https://github.com/RajVeer36399/To-Do-List"}
            target="_blank"
          >
            <FaGithub
              size={23}
              className="hover:scale-110 transition-all duration-200  text-white"
            />
          </Link>
          
        </div>
      </div>
      </div>
  );
}
