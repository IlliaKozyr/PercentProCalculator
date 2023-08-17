import React from "react";
import { Routes, Route } from "react-router-dom"; 
import { observer } from "mobx-react-lite";
import { СalculatorForm } from "./components/compoundInterest";
import { Header } from "./components/header";
import { UnderDevelopment } from "./components/underDevelopment";
import { NotFound } from "./components/notFound";


export const СompoundInterestCalculatorApp = observer(() => {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/сompound-interest" element={<СalculatorForm />}/>
                <Route path="/simple-interest" element={<UnderDevelopment />}/>
                <Route path="/сapital-gain" element={<UnderDevelopment />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    );
});
