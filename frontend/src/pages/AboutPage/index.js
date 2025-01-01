import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';


const AboutPage = () => {
  useEffect(() => {
    document.title = 'Glower | About Us';
  }, []);

  return (
    <main>
      <PageHero title='About Us' />
      <Wrapper className='page section section-center'>
        
        <h3>Glower Skin Care and haircare Company</h3>
       
        <article>
          <div className='title'>
            <h2>About Us</h2>
            <div className='underline'></div>
          </div>
          <p>
            Glower Products, Based In Surat, Specializes in creating Natural skincare
            solution that combine tradational wisdom with modern science. Our Rang of products
            including face scrums, body lotions, and masks, is crafted using 100% natural ingradients. 
            We prioritize sustainablity by ethically sourcing matterials and using eco-friendly packiging.
            <br/>
            <br/>
            At Glower, we believe in promoting healthy, Glowing Skin while carring for the environment.Our products 
            are cruelty-free, effective, and designed to help you feel your best, inside and out. Discover the power 
            of nature with Glower products. 
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
