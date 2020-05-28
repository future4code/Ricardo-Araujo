import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { HeaderWrapper } from './style';
import {Header} from "./index"


describe("Test Header", ()=>{
    // test("Checar se todos os sub components importantes estão presentes",()=>{
    //     //preparacao

    //     const renderedComponent = shallow(<HeaderWrapper/>)
    //     //execucao
    //     const foundRenderedComponent = renderedComponent.find()

    //     //verificacao
    //     expect(foundRenderedComponent).find(h1)
    // })

    test("Verifica aparencia do Header", ()=>{
        //preparacao e execucao
        const newSnapshot = renderer.create(<HeaderWrapper />).toJSON();

        //verificacao
        expect(newSnapshot).toMatchSnapshot();
    })

    test("Verifica handleSubmit", ()=>{
        //preparacao
        const botao = shallow(<Header createTask={mockCreateTask}/>);
        const botaoFind = botao.find(<button/>);
        const event = {
            preventDefault(){}
        }
        const mockCreateTask = jest.fn()

        //execucao
        botaoFind.simulate("click", event)

        //verificacao
        expect(event).toHaveBeenCalledTimes(1);
        expect(mockCreateTask).toHaveBeenCalledTimes(1);

    })
})

