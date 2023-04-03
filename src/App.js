import { Routes, BrowserRouter, Route, Navigate, Link } from "react-router-dom";
import { PrismicProvider, PrismicToolbar } from "@prismicio/react";

import { client, repositoryName } from "./prismic";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Post } from "./pages/Post";
import { Preview } from "./pages/Preview";
import  Threetest  from "./pages/Threetest";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
/**
 * Main app component
 */
export const App = () => {
  return (
    <PrismicProvider
      client={client}
      internalLinkComponent={({ href, ...props }) => (
        <Link to={href} {...props} />
      )}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/three" element={<Threetest />} />
          <Route path="/blog" element={<Navigate to="/" />} />
          <Route path="/blog/:uid" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <PrismicToolbar repositoryName={repositoryName} />
    </PrismicProvider>
  );
};


export default App;
