import React from 'react'
import Container from '../Container/Container'
import Title from '../Title/Title'
import './style.css'
import Button from '../Button/Button'
const Information = ({name,description,src,alt,subName,btn}) => {
  return (
    <section>
    <Container>
      <article className="about">
      <div>
      <Title>
        {name}
      </Title>
        <p>
          {subName}
        </p>
        <p>
         {description}
        </p>
        <Button>
           {btn}
        </Button>
      </div>
      <div className='images'>
        <img src={src}  alt={alt}/>
      </div>
      </article>
    </Container>
    </section>
  )
}

export default Information
