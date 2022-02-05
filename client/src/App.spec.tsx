import React from 'react';
import { shallow, mount, render } from "enzyme";
import App from './App';
import { isIPv4 } from "is-ip";
jest.mock("is-ip", () => {
    isIPv4: jest.fn()
}) 

describe('App Component Tests', (): void => {
    const wrapper = shallow(<App />);
    it('search button exists and has text Search', (): void => {
        expect(
            wrapper.find('.SearchButton').text()
        ).toBe("Search")
    })
    it('search box exists and has text Enter IP Address', (): void => {
        expect(
            wrapper.find('.SearchBox').children()
        ).toBe("Enter IP Address")
    })
});