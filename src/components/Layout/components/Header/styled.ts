import styled from 'styled-components'

export const Header = styled.header`
  padding: 18px 32px;
  background-color: var(--plate-color);
  border-bottom: 1px solid var(--border-color);
`

export const ProjectName = styled.a`
  color: inherit;
  font-weight: bold;
  text-decoration: none;
  transition: 0.25s ease-out;

  &:hover {
    opacity: 0.6;
  }
`
