
const Button = ({ type, className, children, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
