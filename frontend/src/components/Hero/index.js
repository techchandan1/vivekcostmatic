import React from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero.png';


const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>Let we take care of your skin and hair</h1>
        
        <Link to='/products' className='btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={hero} alt='' className='main-img' />
      </article>
      
    </Wrapper>
    );
};

export default Hero;
