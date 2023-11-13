// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled,{ css } from 'styled-components'

// Impor Colors
import colors from './Colors';
import { borderWidth } from './Constant';

export const PageWrapper = styled.div`

`

export const ComponentBorder = css`
    border: ${borderWidth}px solid black;
`

const commonWriting = css`
  font-family: "Bradley Hand", cursive;
  font-style: italic;
`;

const commonLink = css`
    color: ${colors.link} ;
    text-decoration: none;

    &:hover {
        color: ${colors.linkHover};
    }
`


export const StyledLink = styled(Link)`
    ${commonWriting};
    ${commonLink}
`

export const StyledLi = styled.li`
    list-style:none;
`
export const StyledSpanHeader = styled.span`
  ${commonWriting};
`