import Navbar from "@/components/navbar";
import Image from "next/image";
import {
  SiSelenium,
  SiReact,
  SiPython,
  SiFlask,
  SiKeras,
  SiGithub,
} from "react-icons/si";
const projects = [
  {
    id: 1,
    title: "Siggy",
    description:
      "Siggy is a web scraping tool built with Selenium that extracts menu items from Swiggy and recommends food options tailored to your budget, making dining decisions effortless.",
    image: "/siggy.png",
    icons: [<SiSelenium />, <SiReact />, <SiPython />, <SiFlask />],
    link: "https://github.com/Sharan420/siggy-frontend",
  },
  {
    id: 2,
    title: "Traffix",
    description:
      "Keras is used to optimize traffic light timings by real-time traffic density detection, enhancing urban transportation efficiency and reducing congestion.",
    image: "/traffixpng.png",
    icons: [<SiKeras />, <SiPython />],
    link: "https://github.com/Sharan420/Traffic-Classifier",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-screen px-8 pb-8 md:pb-0'>
        <div className='flex flex-col items-start justify-start w-full md:w-3xl min-h-screen pt-24'>
          <h1 className='text-4xl font-bold underline decoration-2 underline-offset-8 mb-6'>
            Projects
          </h1>
          {projects.map((project) => (
            <div
              className='flex flex-col items-start justify-start w-full mb-8 gap-4'
              key={project.id}
            >
              <h2 className='text-3xl font-bold flex flex-row gap-4 items-center justify-center'>
                {`${project.title}`}
                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-xl'
                  >
                    <SiGithub />
                  </a>
                )}
              </h2>
              <div className='flex flex-row items-center justify-center gap-2'>
                {project.icons.map((icon, index) => (
                  <div key={index}>{icon}</div>
                ))}
              </div>
              <p className='text-sm text-gray-500 mb-4'>
                {project.description}
              </p>
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={400}
                className='w-1/2 h-auto object-cover rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
