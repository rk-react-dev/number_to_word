import React from 'react';
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

  test('should have an text field', () => {
    expect(wrapper.find('input[type="number"]').length).toEqual(1);
  });

  test("should call change event and set word state as two word",()=>{
    wrapper.find('input[type="number"]').simulate('change', {
      target: {
        value: '2',
      },
    });
    expect(wrapper.find('h2').text()).toContain("two");
  })

  test("should call change event and set word state 99999999 in word",()=>{
    wrapper.find('input[type="number"]').simulate('change', {
      target: {
        value: '99999999',
      },
    });
    expect(wrapper.find('h2').text()).toContain("nine crore ninety nine lakh ninety nine thousand nine hundred ninety nine");
  })
})
