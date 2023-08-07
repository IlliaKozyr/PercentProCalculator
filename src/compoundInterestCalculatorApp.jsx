import React from "react";
import { СalculatorForm } from "./components/calculatorForm";
import { Header } from "./components/header";
import { observer } from "mobx-react-lite";
import { store } from "./store";

export const СompoundInterestCalculatorApp = observer(() => {
    const {numbers} = store;
    
    return (
        <>
            <Header />
            <СalculatorForm />
        </>
    );
});
