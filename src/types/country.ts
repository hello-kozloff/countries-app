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
  subregion: string
}
