import transpileModules from 'next-transpile-modules'

const withTranspileModules = transpileModules(['ui', 'format'])

export default withTranspileModules({
  basePath: '/dao',
  reactStrictMode: true,
  swcMinify: true,
})
