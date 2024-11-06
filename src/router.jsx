import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import ErrorPage from "./pages/ErrorPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import FavoriteCharactersPage from "./pages/FavoriteCharactersPage";
import CharactersPage1 from "./pages/CharactersPage1";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "about/",
                element: <AboutPage/>
            },
            {
                path: "characters/",
                element: <CharactersPage/>
            },
            {
                path: "characters1/",
                element: <CharactersPage1/>
            },
            {
                path: "acharacter/:id/",
                element: <CharacterDetailsPage />
            },

            {
                path: "favorites/",
                element: <FavoriteCharactersPage/>
            },
            {
                path: "*",
                element: <NotFoundPage/>
            }
        ],
        errorElement: <ErrorPage/>
    }
]);

export default router