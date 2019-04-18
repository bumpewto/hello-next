import styled from "styled-components";
import theme from "../styles/_theme";

// prettier-ignore
const SpaceWrapper = styled.div`
  padding: ${props => theme.spacing[props.height] || theme.spacing.None} ${props => theme.spacing[props.width] || theme.spacing.None};
`;

export default SpaceWrapper;
