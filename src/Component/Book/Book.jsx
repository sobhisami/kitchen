import Button from "../Button/Button"
import Container from "../Container/Container"
import Title from "../Title/Title"
import './style.css'
const Book = () => {
  return (
    <div className="book">
      <Container>
       <section className="Booked">
        <img src={"../../images/BookedAll.png"} alt="BookedAll" />
        <article>
          <Title variant="title-wight">Come join us for a lunch this weekend and enjoy</Title>
          <span>FLAT 10% OFF</span>
          <Button>Book Table</Button>
        </article>
        <img src={"../../images/BookedAll.png"} alt="BookedAll" />
       </section>
      </Container>
    </div>
  )
}

export default Book
