import Container from '../Container/Container'
import Title from '../Title/Title'
import './style.css'
import { menuOne,menuTwo } from '../../mock/menu'
import Item from './Item'
const Menu = () => {
  return (
    <div>
      <Container>
         <section className='menu'>
          <Title>Straight From Kitchen</Title>
          <span className='title-menu'>Our Menu</span>
          <article>
            <div className='wrapper'>
              {menuOne.map(e=> <Item key={e.id} name={e.name} price={e.price} imgMenu={e.image} imgLine={e.imgline} />)}
            </div>
            <div className='wrapper'>
            {menuTwo.map(e=> <Item key={e.id} name={e.name} price={e.price} imgMenu={e.image} imgLine={e.imgline}/>)}
            </div>
          </article>
         </section>
      </Container>
    </div>
  )
}

export default Menu
