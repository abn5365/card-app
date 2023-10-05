import { html } from 'lit';
import '../src/cards-app.js';

export default {
  title: 'CardsApp',
  component: 'cards-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <cards-app
      style="--cards-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </cards-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
