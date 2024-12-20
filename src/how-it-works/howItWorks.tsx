import React from 'react';
import {
  DivContainer,
  HowWorksButton,
  SectionContainer,
  SubTitle,
  TextContent,
  Title,
  Video,
} from './style';
import Modal from '../shared/modal/modal';

const HowItWorks: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(
    window.innerWidth < 1024,
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
  }, [isMobile]);
  return (
    <SectionContainer>
      <DivContainer>
        <Video>
          <iframe
            src="https://player.vimeo.com/video/439419726?h=035fa20817&autoplay=1&loop=1&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Video>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <TextContent>
          <Title>How does it work ?</Title>
          <SubTitle>
            With the support and service of Velox GmbH, you don't have to wait
            until to get things done.
          </SubTitle>
          {!isMobile && (
            <HowWorksButton onClick={() => setIsModalOpen(true)}>
              {' '}
              Let's try
            </HowWorksButton>
          )}
        </TextContent>
        {isMobile && (
          <HowWorksButton onClick={() => setIsModalOpen(true)}>
            {' '}
            Let's try
          </HowWorksButton>
        )}
      </DivContainer>
    </SectionContainer>
  );
};

export default HowItWorks;
