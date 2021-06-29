import { gql } from '@apollo/client';

const updateTaskMutation = gql`
    mutation updateTask($id: ID!, $text: String!) {
        updateTask(id: $id, text: $text) {
            text
            id
        }
    }
`

export default updateTaskMutation;