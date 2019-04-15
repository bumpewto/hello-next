import styled from "styled-components";
import theme from "../styles/_theme";

// prettier-ignore
const SpaceWrapper = styled.div`
  padding: ${props => theme.spacing[props.height]} ${props => theme.spacing[props.width]};
`;

export default SpaceWrapper;
