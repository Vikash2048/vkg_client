const About = () => {
  return (
    <div id="About" className="w-full h-auto flex flex-col md:flex-row border relative  py-10 px-10  bg-slate-200">
      <div className="md:h-[400px] md:w-1/2 md:pr-10 md:pl-20 flex flex-col justify-center gap-4 ">
        <div>
          <p className=" font-semibold text-2xl">ABOUT US</p>
          <div className=" w-[120px] h-1 border-b-4 border-red-700 "></div>
        </div>

        <h2 className="font-bold text-3xl">VKG HUMAN CAPITAL</h2>
        <p className="text-base">
          With nearly two decades in HR Consulting, VKG HUMAN CAPITAL is a
          top-rated Head Hunting Organization in India. Partnering with Multi
          National Companies, we fill leadership positions worldwide. Our
          tailored approach ensures we exceed client expectations, offering
          services from executive search to organizational consulting. Contact
          us to elevate your organization today.
        </p>
      </div>
      <div className=" overflow-hidden oject md:h-[400px] md:w-1/2 md:pr-20 md:pt-4 pt-10">
        <img
          className="rounded-lg"
          src="/images/about-page-img.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default About;
