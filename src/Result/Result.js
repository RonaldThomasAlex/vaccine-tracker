import styled from "styled-components";

export function Result(props) {
  return (
    <ResultContainer>
      <Table>
        <tr>
          <th>Center</th>
          <th>Date</th>
          <th>Vaccine</th>
          <th>Vaccine availability</th>
        </tr>

        {props?.data?.centers.map((center) =>
          center?.sessions.map((session) => (
            <tr>
              <TableData>{center.name}</TableData>
              <TableData>{session.date}</TableData>
              <TableData>{session.vaccine}</TableData>
              <TableData>{session.available_capacity}</TableData>
            </tr>
          ))
        )}
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

const TableData = styled.td`
  text-align: center;
`;
