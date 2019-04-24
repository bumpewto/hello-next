import styled from "styled-components";
import theme from "../styles/_theme";

const SpaceStack = styled.div`
  padding-top: ${props => theme.spacing[props.top] || theme.spacing.None};
  padding-bottom: ${props => theme.spacing[props.bottom] || theme.spacing.None};
`;

export default SpaceStack;
