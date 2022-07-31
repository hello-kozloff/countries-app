import * as React from 'react'
import * as Styled from './styled'
import { Container } from 'components/Container'
import { Card } from './components'
import { CountryObject } from 'types/country'

export const Countries = () => {
  const [countries, setCountries] = React.useState<CountryObject[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((response) => setCountries(response))
      .finally(() => setLoading(false))
  }, [])

  console.log(countries)

  return (
    <Container>
      <Styled.Countries>
        <Styled.Title>List of countries:</Styled.Title>
        {loading && 'Loading countries...'}
        {!loading && countries.map((country, index) => <Card key={index} {...country} />)}
      </Styled.Countries>
    </Container>
  )
}
