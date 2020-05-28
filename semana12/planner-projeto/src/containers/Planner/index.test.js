import React from 'react';
import renderer from 'react-test-renderer';
import {GridWrapper, PlannerWrapper} from "./style";

describe("Test Planner", ()=>{
    test("Snapshot do grid",()=>{
    //preparacao e execucao
    const newSnapshot = renderer.create(<GridWrapper/>).toJSON()

    //verificacao
    expect(newSnapshot).toMatchSnapshot();
    });
    test("Snapshot diagramação da tela", ()=>{
        //preparacao e execucao
        const newSnapshot = renderer.create(<PlannerWrapper/>).toJSON()

        //verificacao
        expect(newSnapshot).toMatchSnapshot();
    })
})