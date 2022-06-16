import { gql } from "@apollo/client";


export const CREATE_TEAM = gql`
  mutation CreateTeam($input: createTeamInput!) {
    createTeam(input: $input) {
      status
      message
    }
  }
`;

export const GET_TEAM =gql`
  query Query($keyword: String!) {
    getTeams(keyword: $keyword) {
      data {
        _id
        title
        description
        image_name
        image_src
        create_At
        update_At
      
      }
    }
  }
`


