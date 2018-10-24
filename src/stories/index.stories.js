/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '../components/MyButton.vue'
import AtomsButton from '../components/atoms/Button.vue'
import AtomsAccordion from '../components/atoms/Accordion.vue'

storiesOf('Accordion', module)
  .add('default', () => ({
    components: { AtomsAccordion },
    template:
      `<atoms-accordion @click="action" />`,
    methods: { action: action('clicked!') }
  }))
  .add('link header & simple content', () => ({
    components: { AtomsAccordion },
    template:
      `<atoms-accordion @click="action">
        <a slot="header">custom link header</a>
        <p>contents</p>
      </atoms-accordion>`,
    methods: { action: action('clicked!') }
  }))
  .add('button & lists', () => ({
    components: { AtomsAccordion, AtomsButton },
    template:
      `<atoms-accordion @click="action">
        <atoms-button slot="header" style="background-color: #eee">custom button title</atoms-button>
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
      </atoms-accordion>`,
    methods: { action: action('clicked!') }
  }))

storiesOf('Atoms-Button', module)
  .add('with Text', () => ({
    components: { AtomsButton },
    template: '<atoms-button @click="action">atoms Button</atoms-button>',
    methods: { action: action('clicked!') }
  }))

storiesOf('Sample-Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render () {
      return <my-button onClick={this.action}>With JSX</my-button>
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))
