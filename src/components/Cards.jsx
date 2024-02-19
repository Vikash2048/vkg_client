import PropTypes from "prop-types"

const Cards = ({title, img, content}) => {
  return (
    <div className=" flex flex-col items-center text-center  w-[360px] h-auto  px-4 md:py-4 py-2">
        <img className=" w-16 pb-4" src={img}/>
        <h3 className="text-xl font-semibold pb-2 ">{title}</h3>
        <p>{content}</p>
    </div>
  )
}

Cards.propTypes = {
    title: PropTypes.string.isRequired, // Title should be a required string
    img: PropTypes.string.isRequired, // img URL should be a required string
    content: PropTypes.string.isRequired, // Content should be a required string
  };

export default Cards