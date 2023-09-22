import styled from "styled-components";
import HeroBannerDesktop from '/images/hero-banner-desktop.png';
import HeroBannerMobile from '/images/hero-banner-mobile.png';

const SectionContainer = styled.section`
  background-image: url('${HeroBannerDesktop}');
  background-size: cover;
  padding-top: 48px;
  padding-bottom: 48px;

  @media (max-width: 1024px) {
  background-image: url('${HeroBannerMobile}');
  }
  
`;
export { SectionContainer };

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;
export { DivContainer };

const TitleContent = styled.h1`
    font-size: 2rem;
    max-width: 25rem;
    line-height: 150%;
`;
export { TitleContent };

const SubTitle = styled.p`
  font-size: 1.5rem;
`;
export { SubTitle };

const HomeButton = styled.button`
    margin: 2rem 0;
    width: 10rem;
    font-family: Moderat,sans-serif;
    background-color: #195ab4;
    color: #fff;
    font-weight: 400;
    font-size: 15px;
    padding: 10px;
    line-height: 16px;
    cursor: pointer;
    border: none;
    border-color: transparent;
    border-style: solid;
    border-radius: 4px;
    outline: none;
    align-items: center;
    justify-content: center;
    transition-property: all;
    transition-duration: .15s;
`
export {HomeButton};