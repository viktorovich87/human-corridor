export const scrollToElement = elem => {
  const element = document.getElementById(elem)
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = element.getBoundingClientRect()
  const needScrollToMyDivInPX = elemRect.top - bodyRect.top

  window.scrollTo({
    top: needScrollToMyDivInPX,
    behavior: 'smooth',
  })
}