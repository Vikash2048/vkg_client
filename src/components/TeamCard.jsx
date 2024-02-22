import PropTypes from "prop-types"

const TeamCard = ({name, role, link, img}) => {
  return (
    <div className="w-auto h-auto flex flex-col items-center  px-4 md:py-4 py-1">
        <div className="border-2 rounded-full md:h-48 md:w-48 h-36 w-36 overflow-hidden">
            <img className="object-fit md:w-48 md:h-48 h-36 w-36  bg-white" src={img} alt="img"/>
        </div>
        <h3 className="pt-2 text-2xl font-semibold">{name}</h3>
        <p>{role}</p>
        <a className="my-2" href={link}><img src="/images/linkedin.png"/></a>
    </div>
  )
}


TeamCard.propTypes = {
  name: PropTypes.string.isRequired, // Title should be a required string
  img: PropTypes.string.isRequired, // img URL should be a required string
  link: PropTypes.string.isRequired, // img URL should be a required string
  role: PropTypes.string.isRequired, // Content should be a required string
};

export default TeamCard