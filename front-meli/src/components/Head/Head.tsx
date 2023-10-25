import { Helmet } from "react-helmet-async"


export const Head = ({title}) => {
  return (
    <Helmet>
          <title>{ title}</title>
            <link rel='icon' href='logo.png' type='image/x-icon' />
            <meta charset='utf-8' />
            <meta
                name='description'
                content='Challenge Meli'
            />
            <meta name='keywords' content='Mercado Libre, React, Front-end, Typescript, Challenge, MELI, JavaScript' />
            <meta name='author' content='Kevin Sierra' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='theme-color' content='#ffe600' />
            <meta property='og:title' content={title} />
            <meta property='og:locale' content='es_AR' />
            <meta property='og:url' content='' />
            <meta property='og:type' content='website' />
            <meta
                property='og:description'
                content='Challenge Meli'
            />
            <meta property='og:image' content='' />
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:url' content='' />
            <meta name='twitter:site' content='@mercadolibre' />
            <meta
                name='twitter:description'
                content='Challenge MELI'
            />
            <meta name='twitter:image' content='' />
            <meta name='twitter:image:alt' content='Home' />
    </Helmet>
  )
}
