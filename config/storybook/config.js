/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'
import './style.scss'

const req = require.context('@/components', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
