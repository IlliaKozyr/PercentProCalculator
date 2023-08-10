import React from "react";
import { observer } from "mobx-react-lite";
import { СalculatorForm } from "./components/calculatorForm";
import { Header } from "./components/header";


export const СompoundInterestCalculatorApp = observer(() => {

    return (
        <>
            <Header />
            <СalculatorForm />
        </>
    );
});
