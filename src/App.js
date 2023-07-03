import React from 'react';
import { useQuery } from "@apollo/client";
import GET_HOME_DATA from "./assets/querys/query";

//Styles
import { GlobalStyle } from './assets/global/style';
import * as S from './assets/style/style';

//Assets
import playIcon from './assets/img/play.svg';

//Components
import LoadingSucess from './components/loading sucess/index';
import LoadingError from './components/loading error/index';

export default function App() {
  const { loading, error, data } = useQuery(GET_HOME_DATA);

  if (loading) return <LoadingSucess />;
  if (error) return <LoadingError />;

  const { home } = data;

  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <>
      <GlobalStyle />
      <S.Header>
        <S.HeaderContainer>
          <S.LogoBox>
            <img src={home.logo.url} alt="logo" draggable='false' />
          </S.LogoBox>
          <S.Social>
            {
              home.socials.map((social) => (
                <S.SocialLink href={social.url} target="_blank" rel="noopener noreferrer" title={social.name} >
                  <img src={social.socialLogo.url} alt={`${social.name} icon`} draggable='false' />
                </S.SocialLink>
              ))
            }
          </S.Social>
        </S.HeaderContainer>
      </S.Header>
      <S.Main>
        <S.MainContainer>
          <S.MovieContainer>
            <S.Movie>
              <S.AboutMovie>
                <S.MovieAuthor>{home.author.text}</S.MovieAuthor>
                <S.MovieTittle>{home.tittle.text}</S.MovieTittle>
                <S.MovieSynopsis>{home.synopsis.text}</S.MovieSynopsis>
              </S.AboutMovie>
            </S.Movie>
            <S.MovieButtons>
              <a href={home.watchMovieLink} target="_blank" rel="noopener noreferrer" title="Watch the movie">
                <S.MovieButton>
                  <img src={playIcon} alt="Play Icon" />
                  <p>Assistir agora</p>
                </S.MovieButton>
              </a>
              <a href={home.trailerLink} target="_blank" rel="noopener noreferrer" title="Watch the trailer">
                <S.MovieButton>
                  <p>Assita o trailer</p>
                </S.MovieButton>
              </a>
            </S.MovieButtons>
          </S.MovieContainer>
          <S.NoFaces>
            <img src={home.noFaces.url} alt="Illustration of No Faces from the movie" draggable="false" />
          </S.NoFaces>
        </S.MainContainer>
      </S.Main>
      <S.Footer>
        <p>
          Copyright © {getCurrentYear()}
          <a
            href="https://www.instagram.com/iuricode/"
            target="_blank"
            rel="noopener noreferrer"
            title="Author's Instagram"
          >
            @iuricode
          </a>
        </p>
      </S.Footer>
    </>
  );
};
