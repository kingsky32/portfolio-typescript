import React from 'react';
import styled from 'styled-components';

interface ThumbnailProps {
  background: string;
  thumb: string;
}

const Wrapper = styled.div<{ src: string }>`
  width: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  max-width: 105rem;
  height: 60rem;
  border-radius: 10px;
  background: #ffffff20;
  top: 0;
  margin: auto 0;
  @media screen and (max-width: 1440px) {
    width: 95%;
  }
  @media screen and (max-width: 1024px) {
    width: 100rem;
    top: 0;
    bottom: 0;
    right: -30rem;
  }
  @media screen and (max-width: 925px) {
    width: 95rem;
  }
  @media screen and (max-width: 860px) {
    width: 90rem;
  }
  @media screen and (max-width: 800px) {
    width: 86rem;
  }
  @media screen and (max-width: 768px) {
    width: 75rem;
    height: 45rem;
  }
  @media screen and (max-width: 640px) {
    width: 70rem;
  }
  @media screen and (max-width: 540px) {
    width: 65rem;
  }
  @media screen and (max-width: 480px) {
    width: 62rem;
  }
  @media screen and (max-width: 425px) {
    width: 58rem;
  }
`;

const Video = styled.video`
  width: 100%;
  max-width: 100rem;
  border-radius: 10px;
  position: absolute;
  top: 3rem;
  right: 1rem;
  bottom: 0;
  margin: auto 0;
  object-fit: cover;
  @media screen and (max-width: 1440px) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`;

const Thumbnail = ({ background, thumb }: ThumbnailProps): React.ReactElement => {
  return (
    <Wrapper src={background}>
      <Container>
        <Video autoPlay loop muted poster={thumb}>
          <source src={thumb} />
        </Video>
      </Container>
    </Wrapper>
  );
};

export default Thumbnail;
