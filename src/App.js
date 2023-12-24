import React from "react";
import {Route, Routes} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/ContactUs";
import MoviesPage from "./Screens/MoviesPage";
import NotFound from "./Screens/NotFound";
import SingleMovie from "./Screens/SingleMovie";
import WatchPage from "./Screens/WatchPage";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Account from "./Screens/Dashboard/Account";
import AOS from "aos";
import Password from "./Screens/Dashboard/Password";
import FavouriteMovies from "./Screens/Dashboard/FavouriteMovies";
import MoviesList from "./Screens/Dashboard/Admin/MovieList";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import Genres from "./Screens/Dashboard/Admin/Genres";
import Users from "./Screens/Dashboard/Admin/Users";
import AddMovie from "./Screens/Dashboard/Admin/AddMovie";
import DrawerContext from "./Context/DrawerContext";
import {AuthContextProvider} from "./Context/AuthContext";
import ScrollOnTop from "./Components/Functions/ScrollOnTop";
import ProtectedRoute from "./Components/Functions/ProtectedRoute";

function App() {
    AOS.init();
    return (
        <AuthContextProvider>
            <DrawerContext>
                <ScrollOnTop>
                    <Routes>
                        <Route path="/" element={<HomeScreen/>}/>
                        <Route path="/about-us" element={<AboutUs/>}/>
                        <Route path="/contact-us" element={<ContactUs/>}/>
                        <Route path="/movies" element={<MoviesPage/>}/>
                        <Route path="/movie/:id" element={<SingleMovie/>}/>
                        <Route path="/watch/:id" element={<WatchPage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/account" element={
                            <ProtectedRoute>
                                <Account/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/password" element={
                            <ProtectedRoute>
                                <Password/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/favourites" element={
                            <ProtectedRoute>
                                <FavouriteMovies/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/dashboard" element={
                            <ProtectedRoute>
                                <Dashboard/>
                            </ProtectedRoute>
                        }/>
                        // TODO: add admin protected route
                        <Route path="/movieslist" element={<MoviesList/>}/>
                        <Route path="/users" element={<Users/>}/>
                        // TODO: maybe remove genres
                        <Route path="/addmovie" element={<AddMovie/>}/>
                        <Route path="/genres" element={<Genres/>}/>

                        <Route path="*" element={<NotFound/>}/>

                    </Routes>
                </ScrollOnTop>
            </DrawerContext>
        </AuthContextProvider>
    )
}

export default App;