import React from "react";
import { СalculatorForm } from "./components/calculatorForm";
import { Header } from "./components/header";
import { observer } from "mobx-react-lite";


export const СompoundInterestCalculatorApp = observer(() => {

    return (
        <>
            <Header />
            <СalculatorForm />
        </>
    );
});
