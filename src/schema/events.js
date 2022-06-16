import { gql } from "@apollo/client";

export const CREATE_EVENTS = gql`
  mutation Mutation($input: createEventInput!) {
    createEvent(input: $input) {
      status
      message
    }
  }
`;

export const GET_ALL_EVENTS = gql`
  query Query($eventId: String!) {
    getEvent(event_Id: $eventId) {
      status
      message
      data {
        _id
        title
        chairman {
          _id
          user_name
        }
        description
        start_Time
        end_Time
        create_By {
          _id
          user_name
        }
        approve
        venue
        date
        participants {
          user_Id {
            _id
            user_name
          }
          accept
        }
        topics {
          _id
          title
          notes
        }
      }
    }
  }
`;

export const GET_EVENTS_BY_DATE = gql`
  query GetEventByDate($date: String!) {
    getEventByDate(date: $date) {
      status
      message
      data {
        _id
        title
        chairman {
          _id
          user_name
        }
        description
        start_Time
        end_Time
        create_By {
          _id
          user_name
        }
        approve
        venue
        date
        participants {
          user_Id {
            _id
            user_name
          }
          accept
        }
        topics {
          _id
          title
        }
      }
    }
  }
`;
