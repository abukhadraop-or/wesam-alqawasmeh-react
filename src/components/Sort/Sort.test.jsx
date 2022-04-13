import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Sort from './Sort';

describe('<Sort />', () => {
  const sortChangeHandler = jest.fn();
  it('Renders 3 Cards', () => {
    const wrapper = shallow(<Sort sortChangeHandler={sortChangeHandler} />);
    const cards = wrapper.find("[test-id='card']");
    expect(cards.length).toBe(3);
  });

  it('Renders SubMenu on click', () => {
    const wrapper = shallow(<Sort sortChangeHandler={sortChangeHandler} />);
    const cardHeader = wrapper.find("[test-id='sort-card-header']");
    cardHeader.simulate('click');
    const subMenu = wrapper.find("[test-id='sub-menu']");
    expect(subMenu.html()).toBeDefined();
  });

  it('Renders disabled button initially', () => {
    const wrapper = shallow(<Sort sortChangeHandler={sortChangeHandler} />);
    const button = wrapper.find("[test-id='disabled-button']");
    expect(button.length).toBe(1);
  });

  it("Doesn't render search button initially", () => {
    const wrapper = shallow(<Sort sortChangeHandler={sortChangeHandler} />);
    const button = wrapper.find("[test-id='search-button']");
    expect(button.length).toBe(0);
  });
});
