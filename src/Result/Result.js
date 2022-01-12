import styled from "styled-components";

export function Result(props) {
  return (
    <ResultContainer>
      <Table>
        <tr>
          <th>Center</th>
          <th>Address</th>
          <th>Fee Type</th>
        </tr>
        {props?.data?.centers.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.address}</td>
            <td>{data.fee_type}</td>
          </tr>
        ))}
      </Table>
    </ResultContainer>
  );
}

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Table = styled.table`
  table-layout: fixed;
`;
