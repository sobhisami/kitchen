import Container from '../Container/Container'
import Cart from './Cart'
import './style.css'
import data from '../../mock/data'
import Title from '../Title/Title'
const Special = () => {
  return (
    <div className='special'>
      <Container variant="container-small">
        <section className='special'>
          <Title>Special</Title>
          <span className='sub-title'>What makes us special</span>
          <article className='carts'>
            {data.map(e=> <Cart description={e.description} src={e.img} key={e.id} title={e.title}/>)}
          </article>
        </section>
      </Container>
    </div>
  )
}

export default Special
