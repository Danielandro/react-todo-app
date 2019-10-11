import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from './AddTodo';

function setupShallow() {
  const addTodo = jest.fn();
  const enzymeWrapper = shallow(<AddTodo addTodo={addTodo} />)

  return {
    enzymeWrapper
  }
}

describe('AddTodo', () => {

  it('renders form with correct fields', () => {
    const { enzymeWrapper } = setupShallow();

    const addTodoForm = enzymeWrapper.find('form');
    const inputField = enzymeWrapper.find('input[type="text"]');
    const submitButton = enzymeWrapper.find('input[type="submit"]');

    expect(addTodoForm.exists()).toBe(true);
    expect(inputField.props().value).toEqual('');
    expect(submitButton.exists()).toBe(true);
  })

  it('new todo text is echoed', () => {
    const { enzymeWrapper } = setupShallow();
    const inputField = enzymeWrapper.find('input[type="text"]');


    inputField.simulate('change', {
      target: { value: 'Wash the car' }
    });

    expect(enzymeWrapper.find('input[type="text"]').props().value).toEqual('Wash the car');
  })
})