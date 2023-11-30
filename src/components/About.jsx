// Purpose: About component for the portfolio website.
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="text-left pb-8 mb-4 pl-4">
            <p className="text-4xl md:text-6xl font-bold inline border-b-4 border-[#2097F3]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] p-4 md:p-0 w-full md:grid grid-cols-2 gap-8">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl md:text-4xl sm:ml-5 p-2 md:p-0 font-bold">
              Welcome to my website, take a look around
            </p>
          </div>
          <div>
            <p className="px-2 lg:px-0">
              My passion for learning and creating solutions with the latest
              technologies have guided my journey in tech. Combining my
              knowledge of full stack web development with data science
              principles, I can create a range of solutions that are valuable to
              the end-user. The projects featured here are focused on creating solutions that
              can scale and incorporate best practices across a number of
              technologies and software development disciplines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
