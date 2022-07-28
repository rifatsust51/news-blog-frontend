



import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Error from '../pages/error';
import Home from '../pages/home';
import NewsFeed from '../pages/news-feed';
import Profile from '../pages/profile';
import UserLogin from '../pages/userLogin';
import UserLogOut from '../pages/userLogOut';
import UserSignUp from '../pages/userSignUp';

import { ProtectedRoutes, ProtectedRoutesBeforeLogin } from './ProtectedRoutes';


function PageRoutes() {

    // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProtectedRoutesBeforeLogin>
                        <Home />
                    </ProtectedRoutesBeforeLogin>} />

                    <Route path="/login" element={<ProtectedRoutesBeforeLogin>
                        <UserLogin />
                    </ProtectedRoutesBeforeLogin>} />

                    <Route path="/signup" element={<ProtectedRoutesBeforeLogin>
                        <UserSignUp />
                    </ProtectedRoutesBeforeLogin>} />

                    <Route path="/news_feed" element={<ProtectedRoutes>
                        <NewsFeed />
                    </ProtectedRoutes>} />

                    <Route path="/profile" element={<ProtectedRoutes>
                        <Profile />
                    </ProtectedRoutes>} />

                    <Route path="/logout" element={<ProtectedRoutes>
                        <UserLogOut />
                    </ProtectedRoutes>} />
                       
                    <Route path="/*" element={<Error />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default PageRoutes;
