import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import SearchBox from './SearchBox';
import LocationInfo from './LocationInfo';


describe('App Component Tests', (): void => {
    const wrapper = shallow(<App />);
    it('renders SearchBox component', (): void => {
        expect(
            wrapper.find(SearchBox).length
        ).toEqual(1);
    });
    it('renders LocationInfo component', (): void => {
        expect(
            wrapper.find(LocationInfo).length
        ).toEqual(1);
    })
})