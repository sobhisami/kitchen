import Container from "../Container/Container"
import Button from "../Button/Button"
import './style.css'
const Content = () => {
  return (
    <>
    <div className="contentUs">
      <Container>
        <section className="content">
          <article className="content-one">
            <span>Golden View Dine </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
            <div>
              <img src={"../../images/instagram.svg"} alt="" />
              <img src={"../../images/twitter.svg"} alt="" />
              <img src={"../../images/youtube.svg"} alt="" />
            </div>
          </article>
          <article className="content-two">
            <span>Other Links</span>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & conditions</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">our team</a></li>
              <li><a href="#">Our kitchen</a></li>
            </ul>
          </article>
          <article className="content-three">
            <span>Contact Us</span>
            <div>
              <img src={"../../images/email.svg"} alt="" />
              <span>sobhisami@gmail.com</span>
            </div>
            <div>
              <img src={"../../images/location.svg"} alt="" />
              <span>sobhi Lorem ipsum dolor sit amet.</span>
            </div>
            <div>
              <img src={"../../images/phone.svg"}  alt="" />
              <span>+1800 287 256</span>
            </div>
          </article>
        </section>
      </Container>
    </div>
    <div>
      <Container>
      <div className="contact">
      <article>
        <img src={"../../images/email.svg"} alt="" />
        <span>Subscribe to our Newsletter</span>
      </article>
      <input type="text" placeholder="Your Email id"/>
      <Button >Subscribe</Button>
      </div>
      </Container>
    </div>
    </>
  )
}

export default Content
