import * as React from 'react'

export type SearchProps = Pick<
  React.HtmlHTMLAttributes<HTMLInputElement>,
  'defaultValue' | 'onChange'
>
