import React from 'react';
import {FormComponent} from "./components/Form/Form";
import {MakeWeb} from "./components/MakeWeb/MakeWeb";
import './App.css'
import {Nepomn} from "./components/Nepomn/Nepomn";
import {TableComponent} from "./components/Nepomn/TableComponent";
import {EditTable} from "./components/Nepomn/EditTable";
import {DateRange} from "./components/Nepomn/DataPicker";

function App() {
    return (
        <>
            <DateRange />
        </>
    );
}

export default App;
