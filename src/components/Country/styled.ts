import styled from 'styled-components'

export const Country = styled.div`
  padding: 16px;
  background-color: var(--plate-color);
  border-bottom: 1px solid var(--border-color);
  border-radius: 6px;
`

export const Info = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 16px;
  align-items: flex-start;
  grid-row-gap: 8px;
`

export const Flag = styled.div`
  display: inline-block;
  border: 1px solid var(--border-color);
  padding: 8px;
  border-radius: 50%;
  grid-row: span 2;
`

export const FullName = styled.h1`
  padding-top: 8px;
  font-size: 18px;
  font-weight: bold;
  grid-column: 2;
`

export const Attrs = styled.div`
  display: grid;

  > * {
    margin: 4px 0;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

export const Attr = styled.span`
  opacity: 0.6;

  span {
    margin-left: 4px;
  }
`

export const Map = styled.div`
  margin-top: 16px;
`
