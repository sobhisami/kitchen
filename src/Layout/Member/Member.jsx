import {Container} from '../../Component'
import {member} from '../../mock/members.js'
import './style.css'

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
