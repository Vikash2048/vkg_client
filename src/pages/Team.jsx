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
          link="https://www.linkedin.com/in/vikas-gupta-812230119"
        />
        <TeamCard 
          name="Karishma"
          role="Manager"
          img="/images/karishma.jpg"
          link="https://www.linkedin.com/in/karishma-rajput-012911217"
        />
        <TeamCard 
          name="Dr. Preeti Goyal"
          role="Founder & CEO"
          img="/images/preeti_goyal.jpg"
          link="https://www.linkedin.com/in/dr-preeti-goyal-b790a41a6"
        />
      </div>
    </div>
  );
};

export default Team;
