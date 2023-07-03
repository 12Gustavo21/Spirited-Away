import React from 'react';
import { useQuery } from "@apollo/client";
import GET_HOME_DATA from "./assets/querys/query";

//Styles
import { GlobalStyle } from './assets/global/style';
import * as S from './assets/style';

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
      <main>
        <section>
          <div>
            <h2>{home.author.text}</h2>
            <h1>{home.tittle.text}</h1>
            <p>{home.synopsis.text}</p>
          </div>
          <div>
            <div>
              <button>
                <img src={playIcon} alt="play" />
                <span>Assistir agora</span>
              </button>
              <button>
                Assista o trailer
              </button>
            </div>
          </div>
        </section>
        <figure>
          <img src={home.noFaces.url} alt="Illustration of No Faces from the movie" draggable="false" />
        </figure>
      </main>
      <footer>
        <p>
          Copyright © {getCurrentYear()}
          <a
            href="https://www.instagram.com/iuricode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @iuricode
          </a>
        </p>
      </footer>
    </>
  );
};
