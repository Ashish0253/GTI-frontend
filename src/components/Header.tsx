
import '../App.css'

const Header = ({ children }) => {
  return (
    <h1 className="text-[#333333] text-3xl font-semibold">
      {children}
    </h1>
  )
}

export default Header;
