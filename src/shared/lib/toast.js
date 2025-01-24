import toasteventbus from 'primevue/toasteventbus'

const info = (summary = '', detail = '', life = 3000) => {
  toasteventbus.emit('add', { severity: 'info', summary, detail, life })
}

const warn = (summary = '', detail = '', life = 3000) => {
  toasteventbus.emit('add', { severity: 'warn', summary, detail, life })
}

const success = (summary = '', detail = '', life = 3000) => {
  toasteventbus.emit('add', { severity: 'success', summary, detail, life })
}

const error = (summary = '', detail = '', life = 3000) => {
  toasteventbus.emit('add', { severity: 'error', summary, detail, life })
}

export const toast = { info, warn, success, error }