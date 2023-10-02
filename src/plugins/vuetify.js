import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/mdi-svg'
import { mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
        mdi,
      },
    },
  })