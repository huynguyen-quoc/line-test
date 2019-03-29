import React from 'react';
import Main from 'containers/Main';

describe('Main', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Main>
        <div>test</div>
      </Main>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
