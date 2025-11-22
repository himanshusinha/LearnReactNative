import { StyledContainer, StyledCustomText, TextStyled } from './styles';

const StyledComponent = () => {
  return (
    <StyledContainer>
      <StyledCustomText color="orange">Primary Text</StyledCustomText>
      <StyledCustomText color="pink">Secondary Text</StyledCustomText>
    </StyledContainer>
  );
};

export default StyledComponent;
