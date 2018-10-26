/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'

import MyButton from '@/components/atoms/MyButton/MyButton.vue'
import MyAccordion from './MyAccordion.vue'

storiesOf('molecules/MyAccordion', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    components: { MyAccordion },
    template:
      `<MyAccordion @click="action" />`,
    methods: { action: action('clicked!') }
  }))
  .add('start with open', () => ({
    components: { MyAccordion },
    template:
      `<MyAccordion @click="action" :is-visible="true" />`,
    methods: { action: action('clicked!') }
  }))
  .add('link header & simple content', () => ({
    components: { MyAccordion },
    template:
      `<MyAccordion @click="action">
        <a slot="header">custom link header</a>
        <p>contents</p>
      </MyAccordion>`,
    methods: { action: action('clicked!') }
  }))
  .add('button & lists', () => ({
    components: { MyAccordion, MyButton },
    template:
      `<MyAccordion @click="action">
        <MyButton slot="header" style="background-color: #eee">custom button title</MyButton>
        <ul>
          <li>
            item1
          </li>
          <li>
            item2
          </li>
          <li>
            item3
          </li>
          <li>
            item4
          </li>
        </ul>
      </MyAccordion>`,
    methods: { action: action('clicked!') }
  }))
