export { default as Footer } from '../../components/Footer.vue'
export { default as TopNavbar } from '../../components/TopNavbar.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyTopNavbar = import('../../components/TopNavbar.vue' /* webpackChunkName: "components/TopNavbar" */).then(c => c.default || c)
