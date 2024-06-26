import ReactDOM from 'react-dom/client';
import MainPage from '../pages/MainPage/mainPage';
import NotFoundPage from '../pages/NotFoundPage/notFoundPage';
import AboutPage from '../pages/PolicyPages/AboutPage/aboutPage';
import ReturnPage from '../pages/PolicyPages/returnPage/returnPage';
import UserConfirmPage from '../pages/PolicyPages/userConfirmPage/userconfirmPage';
import ConfPage from '../pages/PolicyPages/confidentialityPage/confidentialityPage';
import PersPage from '../pages/PolicyPages/PersonPage/personPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegPage from '../pages/RegisterPage/RegisterPage';
import ProfilePage from '../pages/ProfilePage/profilePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import store from "../Store/store.js";
import {Provider} from "react-redux";
import CatalogPage from '../pages/CatalogPage/Catalog.jsx'
import GameDetail from "../pages/gameDetail/gameDetail.jsx";

import './root.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/register" element={<RegPage/>}/>
                <Route path="/main" element={<MainPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="return" element={<ReturnPage/>}/>
                <Route path="confirm" element={<UserConfirmPage/>}/>
                <Route path="confident" element={<ConfPage/>}/>
                <Route path="person" element={<PersPage/>}/>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="catalog" element={<CatalogPage/>}/>
                 <Route path="/catalog/:id" element={<GameDetail />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
