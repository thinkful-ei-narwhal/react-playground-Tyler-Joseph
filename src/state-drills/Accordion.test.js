import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe('<Accordion />', () => {
  it('renders empty \'li\' if sections not supplied', () => {
    const items = []
    const tree = renderer.create(<Accordion sections={items}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('component renders no section as active by default', () => {
    const tree = renderer.create(<Accordion sections={sections}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('opens any clicked section', () => {
    const wrapper = Enzyme.shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('only opens one section at a time', () => {
    const wrapper = Enzyme.shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
})})