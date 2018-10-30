/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'

import MyCard from './MyCard.vue'

storiesOf('atoms/MyCard', module)
  .addDecorator(VueInfoAddon)
  .add('div tag', () => ({
    components: { MyCard },
    template:
      `<MyCard>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus est at sollicitudin convallis. Mauris metus magna, dictum tincidunt nunc id, tristique molestie dolor. In ut ligula magna. Ut magna sem, efficitur blandit venenatis sed, hendrerit non nulla. Donec nec euismod dui. Etiam congue finibus enim, rhoncus suscipit augue dignissim sed. Donec dolor orci, dapibus id pellentesque et, fermentum eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</MyCard>`,
    methods: { action: action('clicked!') }
  }))
  .add('p tag', () => ({
    components: { MyCard },
    template: '<MyCard tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus est at sollicitudin convallis. Mauris metus magna, dictum tincidunt nunc id, tristique molestie dolor. In ut ligula magna. Ut magna sem, efficitur blandit venenatis sed, hendrerit non nulla. Donec nec euismod dui. Etiam congue finibus enim, rhoncus suscipit augue dignissim sed. Donec dolor orci, dapibus id pellentesque et, fermentum eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</MyCard>',
    methods: { action: action('clicked!') }
  }))
  .add('include list', () => ({
    components: { MyCard },
    template:
    `<MyCard tag="div">
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>consectetur adipiscing elit.</li>
        <li>Maecenas luctus est at sollicitudin convallis.</li>
        <li>Mauris metus magna, dictum tincidunt nunc id</li>
      </ul>
    </MyCard>`,
    methods: { action: action('clicked!') }
  }))
