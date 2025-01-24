export const baseURL = (to, from, next) => {
  if (to.path === '/') {
    return next('/characters')
  }

  next()
}