/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import MyButton from './MyButton.vue'

storiesOf('atoms/MyButton', module)
  .add('button tag', () => ({
    components: { MyButton },
    template: '<MyButton @click="action">atoms Button</MyButton>',
    methods: { action: action('clicked!') }
  }))
  .add('button tag -- type:submit', () => ({
    components: { MyButton },
    template: '<MyButton tag="button" type="submit" @click="action">atoms Button</MyButton>',
    methods: { action: action('clicked!') }
  }))
  .add('a tag', () => ({
    components: { MyButton },
    template: '<MyButton tag="a" href="#examplelink" @click="action">atoms Button</MyButton>',
    methods: { action: action('clicked!') }
  }))
