// Import React Libraries
import { Link } from 'react-router-dom';

// Import Style
import styled,{ css } from 'styled-components'

// Impor Colors
import colors from './Colors';

export const PageWrapper = styled.div`

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


