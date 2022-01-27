import styled from "styled-components";
export function NoDataFound() {
  return <Container>No result found</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  padding: 10px;
  width: 200px;
  background-color: rgb(254, 215, 215);
  @media (min-width: 575px) {
    width: 400px;
  }
`;
