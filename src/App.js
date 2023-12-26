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
import FavoriteMovies from "./Screens/Dashboard/FavoriteMovies";
import MoviesList from "./Screens/Dashboard/Admin/MovieList";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import Users from "./Screens/Dashboard/Admin/Users";
import AddMovie from "./Screens/Dashboard/Admin/AddMovie";
import DrawerContext from "./Context/DrawerContext";
import {AuthContextProvider} from "./Context/AuthContext";
import ScrollOnTop from "./Components/Functions/ScrollOnTop";
import ProtectedRoute from "./Components/Functions/ProtectedRoute";
import * as PropTypes from "prop-types";
import {MovieContextProvider} from "./Context/MovieContext";
import {CommentsContextProvider} from "./Context/CommentsContext";

function App() {
    AOS.init();
    return (
        <AuthContextProvider>
            <MovieContextProvider>
                <CommentsContextProvider>
                    <DrawerContext>
                        <ScrollOnTop>
                            <Routes>
                                <Route path="/" element={<HomeScreen/>}/>
                                <Route path="/about-us" element={<AboutUs/>}/>
                                <Route path="/contact-us" element={<ContactUs/>}/>
                                <Route path="/movies" element={<MoviesPage/>}/>
                                <Route path="/movie/:id/:title" element={<SingleMovie/>}/>
                                <Route path="/watch/:id" element={<WatchPage/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/signup" element={<SignUp/>}/>
                                <Route path="/account" element={
                                    <ProtectedRoute admin={false}>
                                        <Account/>
                                    </ProtectedRoute>
                                }/>
                                <Route path="/favorites" element={
                                    <ProtectedRoute admin={false}>
                                        <FavoriteMovies/>
                                    </ProtectedRoute>
                                }/>
                                <Route path="/dashboard" element={
                                    <ProtectedRoute admin={true}>
                                        <Dashboard/>
                                    </ProtectedRoute>
                                }/>
                                <Route path="/movieslist" element={
                                    <ProtectedRoute admin={true}>
                                        <MoviesList/>
                                    </ProtectedRoute>
                                }/>
                                <Route path="/users" element={
                                    <ProtectedRoute admin={true}>
                                        <Users/>
                                    </ProtectedRoute>
                                }/>

                                // TODO: maybe remove ?
                                <Route path="/addmovie" element={<AddMovie/>}/>

                                <Route path="*" element={<NotFound/>}/>

                            </Routes>
                        </ScrollOnTop>
                    </DrawerContext>
                </CommentsContextProvider>
            </MovieContextProvider>
        </AuthContextProvider>
    )
}

export default App;