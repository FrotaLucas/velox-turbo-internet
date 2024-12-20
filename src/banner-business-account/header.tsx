import React from 'react';
import {
  DivContainer,
  HomeButton,
  SectionContainer,
  SubTitle,
  TitleContent,
} from './style';

import Modal from '../shared/modal/modal';

const Banner: React.FC = () => {
  const [isModal, setIsModal] = React.useState(false);

  return (
    <SectionContainer>
      <DivContainer>
        <TitleContent>
          Bring more efficiency to your business with the best internet and
          reach out new customers
        </TitleContent>
        <SubTitle>
          All in a fast and practical way with the best service
        </SubTitle>
        <Modal isOpen={isModal} onClose={() => setIsModal(false)} />
        <HomeButton onClick={() => setIsModal(true)}>Check out More</HomeButton>
      </DivContainer>
    </SectionContainer>
  );
};

export default Banner;
