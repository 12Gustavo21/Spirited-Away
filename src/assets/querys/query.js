import { gql } from "@apollo/client";

const GET_HOME_DATA = gql`
query {
  home(where: {slug: "home"}) {
    logo {
      id
      url
    }
    socials {
      url
      name
      socialLogo {
        id
        url
      }
    }
    noFaces {
      id
      url
    }
    author {
      text
    }
    tittle {
      text
    }
    synopsis {
      text
    }
  }
}
`;

console.log(GET_HOME_DATA);

export default GET_HOME_DATA;