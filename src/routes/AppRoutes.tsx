import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from '../pages/welcome/Welcome';

const AppRoutes = ():JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Welcome/>}></Route>
        </Routes>
    )
}

export default AppRoutes;