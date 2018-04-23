import React from 'react';
import {shallow} from 'enzyme';
import ProductList from './ProductList';

let mockProducts, wrapper;

beforeEach(() => {
    // This is run before every test
    mockProducts = [
        {id: 1, name: 'Mock product 1', brand: 'MockBrandA'},
        {id: 2, name: 'Mock product 2', brand: 'MockBrandB'},
        {id: 3, name: 'Mock product 3', brand: 'MockBrandC'},
    ];
    wrapper = shallow(<ProductList products={mockProducts}/>);
});

it('should render list of products as an unordered list', () => {
    expect(wrapper.find('li').length).toEqual(mockProducts.length); // 3
});

it('should display the product name in each `<li>` element', () => {
    const firstElement = wrapper.find('li').first();
    // Check that the product name is contained somewhere in this element
    expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
});

it('should display the brand name in each `<li>` element', () => {
    const firstElement = wrapper.find('li').first();
    // Check that the brand name is contained somewhere in this element
    expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
});