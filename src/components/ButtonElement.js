import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#fff5ee' : '#fff5ee')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '10px 18px')};
    color: ${({dark}) => (dark ? '#2f4f4f' : '#191970')};
    font-size: ${({fontBig}) => (fontBig ? '24px' : '18px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'gainsboro' : 'honeydew')};
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        padding: 8px 12px;
    }

    @media screen and (max-width: 480px) {
        padding: 6px 11px;
        font-size: 12px;
    }
`