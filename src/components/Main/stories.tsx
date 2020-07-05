import { text, withKnobs } from '@storybook/addon-knobs';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
};

export const Basic = () => (
  <Main
    title={text('Title', 'Next Boilerplate')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
);
