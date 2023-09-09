import {Container} from '../../Component'
const Cart = ({src,title,description}) => {
  return (
    <div className="cart">
      <Container>
      <article className="wrapper">
          <img src={src} alt="spacial" />
          <span>{title}</span>
          <p>{description}</p>
      </article>
      </Container>
    </div>
  )
}

export default Cart
