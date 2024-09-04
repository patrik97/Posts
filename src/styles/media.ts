import { css, CSSObject } from 'styled-components'

const breakpoints = {
  xs: 500,
  sm: 1000,
  md: 1130,
  lg: 1280,
  xl: 1920,
}

const mediaQuery =
  (first: TemplateStringsArray | CSSObject, ...query: Array<TemplateStringsArray | CSSObject | number>) =>
  (...rules: Parameters<typeof css>) => css`
    @media ${css(first, ...query)} {
      ${css(...rules)}
    }
  `

const media = {
  xl: mediaQuery`(min-width: ${breakpoints.xl}px)`,
  lg: mediaQuery`(min-width: ${breakpoints.lg}px)`,
  md: mediaQuery`(min-width: ${breakpoints.md}px)`,
  sm: mediaQuery`(min-width: ${breakpoints.sm}px)`,
  xs: mediaQuery`(min-width: ${breakpoints.xs}px)`,
  maxXs: mediaQuery`(max-width: ${breakpoints.xs - 1}px)`,
  maxSm: mediaQuery`(max-width: ${breakpoints.sm - 1}px)`,
  maxMd: mediaQuery`(max-width: ${breakpoints.md - 1}px)`,
  maxLg: mediaQuery`(max-width: ${breakpoints.lg - 1}px)`,
  maxXlg: mediaQuery`(max-width: ${breakpoints.xl - 1}px)`,
}

export { media }
