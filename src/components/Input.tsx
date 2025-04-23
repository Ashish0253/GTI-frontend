
const Input = ({ handleChange, children }) => {
  return (
    <input className="w-[40ch] p-2 border-2 border-[#4CAF50] rounded-md
      text-base bg-[#f9f9f9] text-gray-800 transition-all duration-300 
      ease-in-out focus:border-green-500 focus:outline-none focus:ring-2 
      focus:ring-green-200 placeholder:text-gray-400 placeholder:italic" 
      type="text" name="Driver ID" placeholder="Enter your Driver ID" 
      onChange={handleChange} />
  )
}

export default Input;
