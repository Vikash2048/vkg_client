import Cards from "../components/Cards";

const Services = () => {
  return (
    <div id="Services" className=" flex flex-col items-center w-full h-auto relative my-10">
      <div className="pb-8">
        <p className="font-semibold text-2xl ">OUR SERVICES</p>
        <div className="w-38 h-1 border-b-4 border-red-700 ml-1"></div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center">
        <Cards title="Talent Acquisition"
          img="/images/talent-management.png"
          content="We invest in our people, providing continuous learning opportunities and career development programs to help you achieve your professional goals."/>
        <Cards
          title="Organization Development Assistant"
          img="/images/organization-chart.png"
          content="Leadership Requirement Assessment. Defining Organization Culture and New Leadership Roles and Fitment"
        />
        <Cards title="Manpower Mapping"
          img="/images/engineer.png"
          content="Detailed mapping of manpower deployed in the industry by company. Given our strong industry network and experience with the corporate world we have been fulfilling requests for industry mapping by industry veterans."/>

        <Cards title="Head Hunting"
          img="/images/head-hunting.png"
          content="Our consultants take on specific assignments for focused searches that go beyond picking up profiles from public domains."/>
        <Cards title="Preliminary Screening And Reference Check"
          img="/images/check-list.png"
          content="Meet Client requests for carrying out basic preliminary screening of personalities that would fit into the organization culture" />
        <Cards title="HR Advisory/Counselling On Carreer Planning"
          img="/images/advisor.png"
          content="Our years of experience with our clients and potential candidates have given us dual perspective on what people are and what organizations are looking for."/>
      </div>
    </div>
  );
};

export default Services;
