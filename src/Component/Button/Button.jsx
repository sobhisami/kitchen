const Button = ({children,variant }) => {
  return (
    <button className={variant!="btn-more"?"btn-more":""}>{children}</button>
  )
}

export default Button
