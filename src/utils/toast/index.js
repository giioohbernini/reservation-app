'use strict'

const toast = (container, title) => {
  container.error('', title, {
    closeButton: true,
    timeOut: 3000,
    tapToDismiss: true
  })
}

export default toast
