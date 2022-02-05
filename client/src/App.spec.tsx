import React from 'react';
import { shallow } from "enzyme";
import App from './App';
import SearchBox from './SearchBox';
import LocationInfo from './LocationInfo';


describe('App Component Tests', (): void => {
    const wrapper = shallow(<App />);
    it('renders SearchBox component', (): void => {
        expect(
            wrapper.containsMatchingElement(<SearchBox />)
        ).toBe(true);
    });
    it('renders LocationInfo component', (): void => {
        expect(
            wrapper.containsMatchingElement(<LocationInfo />)
        ).toBe(true);
    })
})