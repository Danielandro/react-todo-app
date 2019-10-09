import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from './TodoItem';

function shallowSetup() {
  const props = {
    todo: {
      id: 1,
      title: 'Todo 1',
      completed: false
    },
    toggleComplete: jest.fn(),
    removeTodo: jest.fn()
  }

  const enzymeWrapper = shallow(<TodoItem {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('TodoItem', () => {
  it('renders todo based on passed values', () => {
    const { enzymeWrapper, props } = shallowSetup();
    const todo = enzymeWrapper.find('div');
    const todoText = todo.find('p').text();

    expect(todoText).toContain(props.todo.title);
  })
})