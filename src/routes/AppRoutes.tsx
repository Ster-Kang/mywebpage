import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from '../pages/welcome/Welcome';
import Login from '../pages/login/Login';

const AppRoutes = ():JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Welcome/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}

export default AppRoutes;