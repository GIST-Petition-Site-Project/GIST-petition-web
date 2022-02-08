import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    mainColor: string
    mq: {
      laptop: string
      tablet: string
      mobile: string
    }
  }
}
