import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Notification from '../../app/components/Notification'


Enzyme.configure({ adapter: new Adapter() })

describe('<Notification />', () => {

  it('should have a header', () => {

    const wrapper = shallow(<Notification notification='testi'/>)

    expect(wrapper.find('h2').getElements().length).toBe(1)

  });

})