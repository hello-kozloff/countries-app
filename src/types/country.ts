export interface CountryName {
  common: string
  official: string
}

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
}
