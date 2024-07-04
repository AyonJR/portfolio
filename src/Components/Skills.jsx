import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";

const skills = [
  { icon: RiTailwindCssLine, color: "text-cyan-500", name: "Tailwind CSS" },
  { icon: RiJavascriptLine, color: "text-yellow-500", name: "JavaScript" },
  { icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
  { icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
  { icon: RiFirebaseLine, color: "text-yellow-400", name: "Firebase" },
];

const Skills = () => {
  return (
    <div id="skills" className='border-b mx-5 lg:mx-0  border-neutral-800 pb-24'>
      <h1 className='my-20 text-blue-400 text-center text-3xl'>Skills</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
              <Icon className={`text-7xl ${skill.color}`} />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm rounded-lg px-3 py-1 mt-2 shadow-lg transition-all duration-300">
                {skill.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
