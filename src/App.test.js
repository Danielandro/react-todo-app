import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('#toggleTodoComplete', () => {
    const mockTodos = [
      {
        id: 1,
        title: 'first todo',
        completed: false
      },
      {
        id: 2,
        title: 'second todo',
        completed: false
      }
    ]

    it('updates completed status', () => {
      const enzymeWrapper = shallow(<App />)

    });
  });
});
