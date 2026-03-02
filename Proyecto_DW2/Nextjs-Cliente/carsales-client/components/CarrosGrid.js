import styled from "styled-components";
import CarroBox from "./CarroBox";

const StyledCarrosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;


export default function CarrosGrid({carros}){
    return(
        <StyledCarrosGrid>
            {carros?.length > 0 &&
          carros.map((carros) => (
            <div>
              <CarroBox key={carros._id} {...carros}/>
            </div>
          ))}
        </StyledCarrosGrid>
    );
}