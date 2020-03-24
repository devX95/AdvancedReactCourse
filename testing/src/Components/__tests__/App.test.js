import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from 'Components/App'
import CommentBox from 'Components/CommentBox'
import CommentList from 'Components/CommentList'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App/>)
})

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})