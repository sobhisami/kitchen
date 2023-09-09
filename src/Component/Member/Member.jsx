import Container from '../Container/Container'
import './style.css'
import {member} from '../../mock/members.js'
const Member = () => {
  return (
    <div className='members'>
      <Container>
        <section className='member'>
          {member.map(e=>
            <div>
            <img src={e.icon} alt="" />
            <article>
              <span>{e.number}</span>
              <span>{e.text}</span>
            </article>
          </div>
            )}
         
        </section>
      </Container>
    </div>
  )
}

export default Member
