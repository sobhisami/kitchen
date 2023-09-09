import './style.css'
const Title = ({children,variant}) => {
  return (
   <span className={variant==="title-wight"?"title-wight":"title-yal"}>
      {children}
   </span>
  )
}

export default Title
