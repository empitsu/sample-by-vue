/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'

import MyButton from './MyButton.vue'

storiesOf('atoms/MyButton', module)
  .addDecorator(VueInfoAddon)
  .add('button tag', () => ({
    components: { MyButton },
    template:
      `<div>
      <MyButton className="normal" @click="action">normal</MyButton>
      <MyButton className="primary" @click="action">primary</MyButton>
      <MyButton className="success" @click="action">success</MyButton>
      <MyButton className="disabled" @click="action">disabled</MyButton>
      </div>`,
    methods: { action: action('clicked!') }
  }))
  .add('button tag -- type:submit', () => ({
    components: { MyButton },
    template: '<MyButton className="normal" tag="button" type="submit" @click="action">normal</MyButton>',
    methods: { action: action('clicked!') }
  }))
  .add('a tag', () => ({
    components: { MyButton },
    template:
    `<div>
    <MyButton tag="a" href="#examplelink" className="normal" @click="action">normal</MyButton>
    <MyButton tag="a" href="#examplelink" className="primary" @click="action">primary</MyButton>
    <MyButton tag="a" href="#examplelink" className="success" @click="action">success</MyButton>
    <MyButton tag="a" href="#examplelink" className="disabled" @click="action">disabled</MyButton>
    </div>`,
    methods: { action: action('clicked!') }
  }))
