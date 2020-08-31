import React from 'react';
import styled from 'styled-components';
import family from '../images/family.jpg';
import floor from '../images/floor.jpg';
import house from '../images/house.jpg';
import keys from '../images/keys.jpg';
import work from '../images/work.jpg';
import { Link } from 'react-router-dom';

const StyledFirstPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  font-size: 14px;
`;

const StyledMainGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 1000px;
  height: 1000px;
`;

const StyledInfoTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSecondTile = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
`;

const StyledThirdTile = styled.div`
  background: url(${house}) center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledH1 = styled.h1`
  margin: 0;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.8);
`;

const StyledH2 = styled.h2`
  margin: 5px 0;
  font-size: 20px;
`;

const StyledH3 = styled.h3`
  color: #009cff;
  margin: 0;
  font-size: 16px;
  letter-spacing: -1px;
`;

const StyledContent = styled.p`
  color: rgba(0, 0, 0, 0.6);
`;

const StyledContentImage = styled.div`
  background: url(${keys}) center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  p {
    font-weight: 700;
  }
`;

export default function FirstPage() {
  return (
    <StyledFirstPage>
      <StyledMainGrid className="first-page__grid">
        <StyledInfoTile>
          <StyledH1>KLIKA SŁÓW O NAS</StyledH1>
          <StyledH3>CZYLI KIM JESTEŚMY I DOKĄD ZMIERZAMY</StyledH3>
          <StyledContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </StyledContent>
          <StyledContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </StyledContent>
          <Link to="/second-page" className="btn">
            ZOBACZ WIĘCEJ
          </Link>
        </StyledInfoTile>
        <StyledSecondTile className="second-tile__grid">
          <StyledImage src={floor} alt="floor" />
          <StyledImage src={work} alt="work" />
          <StyledImage src={family} alt="family" />
          <StyledContentImage>
            <StyledContent>&mdash;</StyledContent>
            <StyledContent>
              gdy stawałem się dorosłym człowiekiem, ciągle słyszałem głos
              Dziadka mówiącego o Domu przyjaźni i miłości. Cały czas obraz ten
              kojarzy mi się z drewnianym ciepłym domem krytym strzechą. Domem,
              który żył. Domem, który miał duszę
            </StyledContent>
            <StyledContent>&mdash;</StyledContent>
          </StyledContentImage>
        </StyledSecondTile>
        <StyledThirdTile>
          <StyledH2>BUDOWA DOMÓW Z DREWNA</StyledH2>
          <StyledH2>BUDOWA BRAM WJAZDOWYCH</StyledH2>
          <StyledH2>WYKOŃCZENIE WNĘTRZ</StyledH2>
          <StyledH2>ALTANY OGRODOWE</StyledH2>
          <StyledH2>KAMIENNE ELEMENTY ARCHITEKTURY</StyledH2>
          <StyledH2>REMONTY</StyledH2>
        </StyledThirdTile>
        <StyledInfoTile>
          <StyledH1>NASZA OFERTA</StyledH1>
          <StyledH3>DOWIEDZ SIĘ CO MOŻEMY TOBIE ZAOFEROWAĆ</StyledH3>
          <StyledContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </StyledContent>
          <StyledContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </StyledContent>
          <Link to="/second-page" className="btn">
            ZOBACZ WIĘCEJ
          </Link>
        </StyledInfoTile>
      </StyledMainGrid>
    </StyledFirstPage>
  );
}
