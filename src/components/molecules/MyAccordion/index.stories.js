/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'

import MyButton from '@/components/atoms/MyButton/MyButton.vue'
import MyCard from '@/components/atoms/MyCard/MyCard.vue'
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
  .add('button & card', () => ({
    components: { MyAccordion, MyButton, MyCard },
    template:
      `<MyAccordion @click="action">
        <MyButton slot="header" style="background-color: #eee">custom button title</MyButton>
        <MyCard>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus est at sollicitudin convallis. Mauris metus magna, dictum tincidunt nunc id, tristique molestie dolor. In ut ligula magna. Ut magna sem, efficitur blandit venenatis sed, hendrerit non nulla. Donec nec euismod dui. Etiam congue finibus enim, rhoncus suscipit augue dignissim sed. Donec dolor orci, dapibus id pellentesque et, fermentum eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </MyCard>
      </MyAccordion>`,
    methods: { action: action('clicked!') }
  }))
