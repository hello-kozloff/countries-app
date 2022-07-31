import styled from 'styled-components'

export const Search = styled.label`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 8px;
`

export const Label = styled.span`
  font-size: 14px;
  text-align: right;
  white-space: nowrap;
`

export const Input = styled.input`
  padding: 6px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;

  color: inherit;
  font-size: 14px;
`
