import { gql } from '@apollo/client';

const createTaskMutation = gql`
  mutation createTask($text: String!){
    createTask(text: $text){
      text
      id
    }
  }
`;

export default createTaskMutation;