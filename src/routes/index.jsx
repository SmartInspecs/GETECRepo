import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormPage from '../pages/form';
import ViewPage from '../pages/viewPage';

const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/view' element={<ViewPage/>}/>
            <Route path='/registro' element={<FormPage/>}/>
            <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
    )
}

export default RoutesMain;