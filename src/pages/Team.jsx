import TeamCard from "../components/TeamCard";

const Team = () => {
  return (
    <div className="bg-gradient-to-b from-white via-white to-slate-900 w-full h-auto py-10 flex flex-col items-center">
      <div className="mb-8 ">
        <p className="ml-[10px] font-semibold text-2xl">MEET OUR GREAT TEAM</p>
        <div className=" w-72 h-1 border-b-4 border-red-700 "></div>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <TeamCard 
          name="Vikas Gupta"
          role="Founder & CEO"
          img="/images/vikas_vkg.jpg"
          link="https://www.linkedin.com/in/vikas-gupta-812230119"
        />
        <TeamCard 
          name="Karishma"
          role="Sr. Manager"
          img="/images/karishma.jpg"
          link="https://www.linkedin.com/in/karishma-rajput-012911217"
        />
        <TeamCard 
          name="Swati Bhardwaj"
          role="Senior Consultant"
          img="/images/swati_pic.PNG"
          link="#"
        />
      </div>
    </div>
  );
};

export default Team;
