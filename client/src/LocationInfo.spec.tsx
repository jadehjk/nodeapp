import React from 'react';
import LocationInfo from './LocationInfo';
import { shallow } from "enzyme";

describe('LocationInfo Component Tests', (): void => {
    it('does not display info for null values', (): void => {
        const wrapper = shallow(<LocationInfo lat={null} long={null}/>);
        expect(
            wrapper.html()
        ).toEqual("<div class=\"LocationInfo\"></div>");
    });
    it('displays latitude info', (): void => {
        const wrapper = shallow(<LocationInfo lat={0.01} long={null}/>);
        expect(
            wrapper.text()
        ).toEqual("Latitude: 0.01")
    });
    it('displays longitude info', (): void => {
        const wrapper = shallow(<LocationInfo lat={null} long={0.02}/>);
        expect(
            wrapper.text()
        ).toEqual("Longitude: 0.02")
    });
    it('displays both latitude and longitude info', (): void => {
        const wrapper = shallow(<LocationInfo lat={0.01} long={0.02}/>);
        expect(
            wrapper.text()
        ).toEqual("Latitude: 0.01Longitude: 0.02")
    });
});