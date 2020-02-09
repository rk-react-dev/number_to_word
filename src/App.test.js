import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Convert Number into words", ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper= shallow(<App />);
  })
  test('render Title', () => {
    expect(wrapper.find('h1').text()).toContain("Convert Number into words");
  });
})
