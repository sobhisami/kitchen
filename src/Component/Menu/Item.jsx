const Item = ({name,imgMenu,imgLine,price}) => {
  return (
    <div className="item-menu">
      <img src={imgMenu} alt="" />
      <span>{name}</span>
      <img src={imgLine} alt="" />
      <span>{price}</span>
    </div>
  )
}

export default Item
