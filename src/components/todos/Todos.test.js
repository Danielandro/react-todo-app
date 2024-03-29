import React from 'react';
import { shallow } from 'enzyme';
import Todos from './Todos'; // component under test
// import TodoItem from './TodoItem';

function shallowSetup() {
  const props = {
    todos: [
      {
        id: 1,
        title: 'Task 1',
        completed: false
      },
      {
        id: 2,
        title: 'Task 2',
        completed: false
      }
    ],
    toggleTodoComplete: jest.fn(),
    removeTodo: jest.fn()
  }

  const enzymeWrapper = shallow(<Todos {...props} />);

  return {
    enzymeWrapper,
    props
  }
}


describe('Todos', () => {
  it('should render list of todos', () => {
    const { enzymeWrapper, props } = shallowSetup();
    const todoList = enzymeWrapper.find('ul');

    expect(todoList.children()).toHaveLength(props.todos.length);
  })
});
