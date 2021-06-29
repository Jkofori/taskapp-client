import { gql } from '@apollo/client';

const deleteTaskMutation = gql`
  mutation deleteTask($id: ID!){
    deleteTask(id: $id){
      text
      id
    }
  }
`;

export default deleteTaskMutation;