import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import $ from 'jquery';

global.jQuery = $;

Enzyme.configure({ adapter: new Adapter() });

process.env.PUBLIC_URL = '';

const react = document.createElement('div');
react.id = 'react';
react.style.height = '100vh';
document.body.appendChild(react);

global.mount = mount;
global.shallow = shallow;
global.render = render;

// eslint-disable-next-line no-console
const consoleError = console.error;
// eslint-disable-next-line no-console
console.error = jest.fn(message => {
  const skipMessages = [
    'Warning: <%s /> is using incorrect casing.',
    'The tag <%s> is unrecognized in this browser.',
    'Warning: Failed prop type',
    'Invalid transition: rotate',
  ];
  let shouldSkip = false;

  for (const s of skipMessages) {
    if (message.includes(s)) {
      shouldSkip = true;
    }
  }

  if (!shouldSkip) {
    consoleError(message);
  }
});
