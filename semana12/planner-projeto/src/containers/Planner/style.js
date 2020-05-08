import styled from "styled-components";

export const PlannerWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: orange;
    display: grid;
    grid-template-rows: 20% 1fr;
    justify-content: center;
`

export const GridWrapper = styled.div`
    grid-row:2;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 90vw;
    margin: 0 auto;
`

export const DailyWrapper = styled.div`
    border: 1px solid white;
    text-align: center;
`