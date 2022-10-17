import React from "react";
import {render} from '@testing-library/react'
import TodoForm from "./Todoform";

describe('<TodoForm />', () => {
    if('ha input and button', () => {
        const { getByText, getByPlaceholderText } = render(<TodoForm />);
        getByPlaceholderText('할 일을 입력하세요')
        getByText('등록');
    });
});