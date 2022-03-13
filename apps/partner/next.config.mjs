import transpileModules from 'next-transpile-modules'
//  FIXME:
// import defaultTheme from 'tailwindcss/defaultTheme'

const withTranspileModules = transpileModules(['ui']) // add packages

// const { screens } = defaultTheme
export default withTranspileModules({
  basePath: '/partner',
  reactStrictMode: true,
  // swcMinify: true,
  // publicRuntimeConfig: {
  //   breakpoints: screens,
  // },
})
