export interface CountryName {
  common: string
  official: string
}

export type CountryLocation = [number, number]

export interface CountryObject {
  flag: string
  name: CountryName & {
    nativeName: {
      [key: string]: CountryName
    }
  }
  region: string
  subregion: string
  cca2: string
  population: string
  area: string
  languages: {
    [name: string]: string
  }
  capitalInfo: {
    latlng: CountryLocation
  }
}
