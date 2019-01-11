import React from 'react';
import { shallow } from 'enzyme';
import { BoardList } from '../BoardList';

const fetchBoards = jest.fn();

it('matches snapshot with boards', () => {
  const wrapper = shallow(<BoardList fetchBoards={fetchBoards} boards={{boards: [{_id: 1, name: 'board 1'}, {_id: 2, name: 'board 2'}]}} />);
  expect(wrapper).toMatchSnapshot();
})

it('calls fetchBoards in componentDidMount', () => {
  const wrapper = shallow(<BoardList fetchBoards={fetchBoards} boards={{boards: []}} />);
  expect(fetchBoards).toHaveBeenCalled();
})