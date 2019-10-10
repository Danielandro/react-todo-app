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
    toggleTodoComplete: jest.fn(),
    removeTodo: jest.fn()
  }

  const enzymeWrapper = shallow(<TodoItem {...props} />)

  return {
    enzymeWrapper,
    props
  }
}

describe('TodoItem', () => {
  const { enzymeWrapper, props } = shallowSetup();

  it('renders todo based on passed values', () => {
    const todo = enzymeWrapper.find('p');
    const checkbox = todo.find('input[type="checkbox"]')
    const deleteButton = todo.find('button');

    expect(todo.text()).toContain(props.todo.title);
    expect(checkbox.length).toBe(1);
    expect(deleteButton.length).toBe(1);
  })

  it('calls "removeTodo" when deleted', () => {
    const deleteButton = enzymeWrapper.find('button');
    deleteButton.simulate('click');

    expect(props.removeTodo).toHaveBeenCalledWith(props.todo.id);
  })

  it('calls "toggleCompleted" when status changes', () => {
    const checkbox = enzymeWrapper.find('input[type="checkbox"]');
    checkbox.simulate('change');

    expect(props.toggleTodoComplete).toHaveBeenCalledWith(props.todo.id);
  })
})
