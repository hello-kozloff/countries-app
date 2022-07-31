import { transparentize } from 'polished'
import styled from 'styled-components'

export const Card = styled.div`
  padding: 12px;

  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  grid-column-gap: 16px;
  align-items: center;

  border-radius: 6px;
  background-color: var(--plate-color);
  border-bottom: 1px solid var(--border-color);
`

export const Content = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 16px;
  align-items: flex-start;
  grid-row-gap: 4px;
`

export const Flag = styled.div`
  border: 1px solid var(--border-color);
  padding: 8px;
  border-radius: 50%;
  grid-row: span 2;
`

export const Name = styled.span`
  font-weight: 500;
  grid-column: 2;
  line-height: 20px;
`

export const SubRegion = styled.span`
  font-size: 14px;
  opacity: 0.6;
  grid-column: 2;
`
export const More = styled.a`
  display: inline-block;
  padding: 8px 16px;

  color: inherit;
  font-size: 14px;
  text-decoration: none;

  border-radius: 6px;
  background-color: var(--background-color);
  transition: 0.25s ease-out;

  &:hover {
    background-color: ${transparentize(0.9, '#000000')};
  }

  &:active {
    background-color: ${transparentize(0.95, '#000000')};
  }
`
