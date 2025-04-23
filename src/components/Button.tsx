
const Button = ({ type, children }) => {
  return (
    <button className="px-5 py-3 bg-[#4CAF50] text-white text-base border-none
        rounded-md cursor-pointer transition-colors duration-300 ease-in-out 
        hover:bg-[#45a049]" type={type} >
      {children}
    </button>
  )
}

export default Button;
