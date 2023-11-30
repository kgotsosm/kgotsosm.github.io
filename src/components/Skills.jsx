import aws from "../assets/tech/aws.png";
import css from "../assets/tech/css.png";
import github from "../assets/tech/github.png";
import javascript from "../assets/tech/javascript.png";
import mysql from "../assets/tech/mysql.png";
import python from "../assets/tech/python.png";
import react from "../assets/tech/react.png";
import tailwind from "../assets/tech/tailwind.png";

const Skills = () => {
    return (
        <div name='skills' className='w-full h-[800px] sm:h-screen bg-[#0a192f] text-gray-300'>
          {/* Container */}
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div>
                  <p className='text-4xl md:text-6xl font-bold inline border-b-4 border-[#2097F3]'>Skills</p>
                  <p className='py-4'>These are a few of the technologies I&apos;ve worked with</p>
              </div>
    
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto mt-2' src={aws} alt="AWS icon" />
                      <p className='my-4'>AWS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={css} alt="CSS icon" />
                      <p className='my-4'>CSS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={github} alt="Github icon" />
                      <p className='my-4'>GitHub</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={javascript} alt="JavaScript icon" />
                      <p className='my-4'>JavaScript</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-28 mx-auto' src={mysql} alt="MySQL icon" />
                      <p className='my-4'>MySQL</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-24 mx-auto' src={python} alt="Python icon" />
                      <p>Python</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={react} alt="React icon" />
                      <p className='my-4'>React</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={tailwind} alt="Tailwind icon" />
                      <p className='my-4'>Tailwind CSS</p>
                  </div>
              </div>
          </div>
        </div>
    );
    
};

export default Skills;
