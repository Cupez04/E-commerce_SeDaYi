import React from 'react';
import { Container } from 'reactstrap';
import "../../styles/commonsection.css";

const CommonSection = ({title, children}) => {
  return (
    <>
    <section className="common__section">
        <Container className='text-center'>
            <h1>{title}</h1>
        </Container>
    </section>
        {children}
    </>
  )
}

export default CommonSection