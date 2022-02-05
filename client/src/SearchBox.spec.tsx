import React from 'react';
import { shallow } from "enzyme";
import SearchBox from './SearchBox';
import { TextField } from "@mui/material";

describe('SearchBox Component Tests', (): void => {
    it('search button exists and has text Search', (): void => {
        const wrapper = shallow(<SearchBox errorMsg=""/>);
        expect(
            wrapper.find('.SearchButton').text()
        ).toBe("Search")
    })
    it('search box exists and has text Enter IP Address', (): void => {
        const wrapper = shallow(<SearchBox errorMsg=""/>);
        expect(
            (wrapper.find(TextField) as any).props().label
        ).toBe("Enter IP Address")
    })
    it('search box displays error', (): void => {
    const wrapper = shallow(<SearchBox errorMsg="Error"/>);
    expect(
        (wrapper.find(TextField) as any).props().helperText
    ).toBe("Error")
    })
});