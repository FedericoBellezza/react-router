import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import DefaultLayout from "./Layouts/DefaultLayout";

// Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PostListPage from "./Pages/PostListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage}></Route>
          <Route path="/about" Component={AboutPage}></Route>
          <Route path="/post-list" Component={PostListPage}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
