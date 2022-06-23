import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
        On this site you will find both personal and group projects that
        I have been working on over the past year
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/JosephCurtis1999'}>Discover More</Button>
    </LeftSection>
  </Section>
);

export default Hero;