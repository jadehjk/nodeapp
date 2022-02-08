import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

describe('SearchBox Component Tests', (): void => {
    const voidFunc = () => {};
    it('search button exists and has text Search', (): void => {
        const wrapper = shallow(<SearchBox onResetErrorMessage={voidFunc} onSearch={voidFunc} errorMsg='' loading={false}/>);
        expect(
            wrapper.find('.SearchButton').text()
        ).toBe('Search')
    });
    it('search box exists and has text Enter IP Address', (): void => {
        const wrapper = shallow(<SearchBox onResetErrorMessage={voidFunc} onSearch={voidFunc} errorMsg='' loading={false}/>);
        expect(
            (wrapper.find(TextField) as any).props().label
        ).toBe('Enter IP Address')
    });
    it('search box displays error', (): void => {
        const wrapper = shallow(<SearchBox onResetErrorMessage={voidFunc} onSearch={voidFunc} errorMsg='Error' loading={false}/>);
        expect(
            (wrapper.find(TextField) as any).props().helperText
        ).toBe('Error')
    });
    it('search button is disabled if input is not valid', (): void => {
        const wrapper = shallow(<SearchBox onResetErrorMessage={voidFunc} onSearch={voidFunc} errorMsg='Error' loading={false}/>);
        expect(
            (wrapper.find(LoadingButton) as any).props().disabled
        ).toBe(true);
    });
    it('pressing enter does not call the retrieve info function if input is not valid', (): void => {
        const mockFn = jest.fn();
        const eventMock = { key: 'Enter' } as unknown as React.KeyboardEvent;
        const wrapper = shallow(<SearchBox onResetErrorMessage={voidFunc} onSearch={mockFn} errorMsg='Error' loading={false}/>);
        (wrapper.find(TextField) as any).props().onKeyPress(eventMock);
        wrapper.update();
        expect(
            mockFn
        ).toHaveBeenCalledTimes(0);
    })

});