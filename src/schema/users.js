import { gql } from "@apollo/client";

export const CREATE_USERS = gql`
  mutation CreateUser($input: createUserInput!) {
    createUser(input: $input) {
      status
      message
    }
  }
`;

export const GET_USERS_WITH_PAGINATION = gql`
  query GetUsersWithPagination($page: Int!, $keyword: String!, $limit: Int!) {
    getUsersWithPagination(page: $page, keyword: $keyword, limit: $limit) {
      users {
        _id
        user_name
        mail
        position
        image_name
        image_src
        create_At
        update_At
        status
        teams {
          _id
          title
        }
      }
      paginator {
        slNo
        prev
        next
        perPage
        totalPosts
        totalPages
        currentPage
        hasPrevPage
        hasNextPage
        totalDocs
      }
      message
    }
  }
`;


export const UPDATE_USERS = gql`

mutation UpdateUser($input: updateUserInput!) {
  updateUser(input: $input) {
    status
    message
  }
}


`;


export const DELETE_USER = gql`

mutation DeleteUser($userId: String!) {
  deleteUser(user_Id: $userId) {
    status
    message
  }
}



`;
