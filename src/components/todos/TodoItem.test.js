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
    const todo = enzymeWrapper.find('p');
    const checkbox = todo.find('input[type="checkbox"]')
    const deleteButton = todo.find('button');

    expect(todo.text()).toContain(props.todo.title);
    expect(checkbox.length).toBe(1);
    expect(deleteButton.length).toBe(1);
  })

  it('calls removeTodo when deleted', () => {
    const { enzymeWrapper, props } = shallowSetup();
    const deleteButton = enzymeWrapper.find('button');
    deleteButton.simulate('click');

    expect(props.removeTodo).toHaveBeenCalledWith(props.todo.id);
  })
})