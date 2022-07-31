import * as React from 'react'
import * as Styled from './styled'
import { debounce } from 'lodash'
import { Container } from 'components/Container'
import { Card, Search } from './components'
import { CountryObject } from 'types/country'

export const Countries = () => {
  const [countries, setCountries] = React.useState<CountryObject[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [search, setSearch] = React.useState<string>('')

  React.useEffect(() => {
    setLoading(true)

    const path = !search.length
      ? 'https://restcountries.com/v3.1/all'
      : `https://restcountries.com/v3.1/name/${search}`

    fetch(path)
      .then((response) => response.json())
      .then((response) => {
        if ('status' in response) return setCountries([])
        setCountries(response)
      })
      .finally(() => setLoading(false))
  }, [search])

  const handleSearch = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])

  return (
    <Container>
      <Styled.Countries>
        <Styled.Header>
          <Styled.Title>List of countries</Styled.Title>
          <Search onChange={debounce(handleSearch, 200)} />
        </Styled.Header>
        {loading && 'Loading countries...'}
        {!loading && !!search.length && !countries.length && `Country ${search} not found!`}
        {!loading && countries.map((country, index) => <Card key={index} {...country} />)}
      </Styled.Countries>
    </Container>
  )
}
