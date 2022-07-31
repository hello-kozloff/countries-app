import * as React from 'react'
import * as Styled from './styled'
import { useRoute } from 'react-router5'
import { Container } from 'components/Container'
import { CountryObject } from 'types/country'
import { Map } from 'components/Map'

export const Country = () => {
  const { route } = useRoute()
  const [country, setCountry] = React.useState<CountryObject | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${route.params.country}`)
      .then((response) => response.json())
      .then((response: CountryObject[]) => setCountry(response[0]))
      .finally(() => setLoading(false))
  }, [route.params.country])

  return (
    <Container>
      {loading && 'Loading country...'}
      {!loading && country && (
        <Styled.Country>
          <Styled.Info>
            <Styled.Flag>{country.flag}</Styled.Flag>
            <Styled.FullName>{country.name.official}</Styled.FullName>
            <Styled.Attrs>
              <Styled.Attr>
                Code: <span>{country.cca2}</span>
              </Styled.Attr>
              <Styled.Attr>
                Name: <span>{country.name.common}</span>
              </Styled.Attr>
              <Styled.Attr>
                Region: <span>{country.region}</span>
              </Styled.Attr>
              <Styled.Attr>
                Sub region: <span>{country.region}</span>
              </Styled.Attr>
              <Styled.Attr>
                Area: <span>{country.area}</span>
              </Styled.Attr>
              <Styled.Attr>
                Population: <span>{country.population}</span>
              </Styled.Attr>
              <Styled.Attr>
                Languages: <span>{Object.values(country.languages).join(', ')}</span>
              </Styled.Attr>
            </Styled.Attrs>
          </Styled.Info>
          <Styled.Map>
            <Map lat={country.capitalInfo.latlng[0]} lng={country.capitalInfo.latlng[1]} />
          </Styled.Map>
        </Styled.Country>
      )}
    </Container>
  )
}
