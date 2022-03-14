import transpileModules from 'next-transpile-modules'
//  FIXME:
// import defaultTheme from 'tailwindcss/defaultTheme'

const withTranspileModules = transpileModules(['ui']) // add packages

// const { screens } = defaultTheme
export default withTranspileModules({
  basePath: '/partner',
  reactStrictMode: false, // Workaround, need to be false for HeadlessUi components to show
  // swcMinify: true,
  // publicRuntimeConfig: {
  //   breakpoints: screens,
  // },
})
