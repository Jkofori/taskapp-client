import { gql } from '@apollo/client';

const tasksQuery = gql`
    {
        tasks(orderBy: { createdAt: asc }) {
            text
            id
            createdAt
        }
    }
`;

export default tasksQuery;