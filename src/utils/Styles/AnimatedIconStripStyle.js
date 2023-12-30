// Import Style
import styled from 'styled-components';

// Import Colors
import colors from '../Colors';

// Import Constant
import { responsiveWidth } from '../Constant';

export const AnimatedIconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  padding: 40px 0;

  gap: 20px;

  background-color:${colors.creme};

  @media (max-width: ${responsiveWidth}px){
      flex-direction:column;
  }
`;

export const AnimatedIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
