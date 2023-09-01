import React from "react";
import { Routes, Route } from "react-router-dom"; 
import { observer } from "mobx-react-lite";
import { СalculatorForm } from "./components/compoundInterest";
import { Header } from "./components/header";
import { UnderDevelopment } from "./components/underDevelopment";
import { NotFound } from "./page/notFound";
import { MainPage } from "./page/mainPage";
import { ExchangeRates } from "./page/exchangeRatesPage";
import { Certificate } from "./page/certificatePage";
import { CertificateTextPage } from "./components/certificateTextPage";


export const СompoundInterestCalculatorApp = observer(() => {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/сompound-interest" element={<СalculatorForm />}/>
                <Route path="/simple-interest" element={<UnderDevelopment />}/>
                <Route path="/сapital-gain" element={<UnderDevelopment />}/>
                <Route path="/exchange-rates" element={<ExchangeRates />}/>
                <Route path="/certificate" element={<Certificate />}/>
                <Route path="/" element={<MainPage />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    );
});
