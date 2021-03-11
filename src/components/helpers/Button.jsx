import styled from '@emotion/styled';
import { css } from '@emotion/react'

const handleCol = props => {
  switch (props.status) {
    case 'primary':
      return css`
        background-color: #0d6efd;
        border-color: #0d6efd;
      `;
    case '404':
      return css`
        background-color: #2e6e5a;
        border-color: #2e6e5a;
      `;
    default:
      break;
  };
};

const handleHovFocCol = props => {
  switch (props.status) {
    case 'primary':
      return css`
        background-color: #0b5ed7;
        border-color: #0a58ca;
      `;
    case '404':
      return css`
        background-color: #275d5f;
        border-color: #21474f;
      `;
    default:
      break;
  };
};

const handleActCol = props => {
  switch (props.status) {
    case 'primary':
      return css`
        background-color: #0a58ca;
        border-color: #0a53be;
      `
    case '404':
      return css`
        background-color: #21474f;
        border-color: #21474f;
      `;
    default:
      break;
  };
};

const handleDropShadow = props => {
  switch (props.status) {
    case 'primary':
      return css`
        box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
        -webkit-box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
        -moz-box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
      `
    case '404':
      return css`
        box-shadow: 0 0 0 0.25rem rgba(46, 110, 90, 0.5);
        -webkit-box-shadow: 0 0 0 0.25rem rgba(46, 110, 90, 0.5);
        -moz-box-shadow: 0 0 0 0.25rem rgba(46, 110, 90, 0.5);
      `;
    default:
      break;
  };
};

export const Button = styled.button`
-webkit-tap-highlight-color: transparent;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  ${handleCol}
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: .75rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &:hover{ 
    color: #fff;
    ${handleHovFocCol}
  }

  &:focus {
    color: #fff;
    ${handleHovFocCol}
    ${handleDropShadow}
    outline: none;
  }

  &:active {
    color: #fff;
    ${handleActCol}
  }

  &:active:focus {
    ${handleDropShadow}
  }

  &:disabled {
    color: #fff;
    ${handleCol}
    pointer-events: none;
    opacity: 0.65;
  }
`
