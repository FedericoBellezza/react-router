import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import DefaultLayout from "./Layouts/DefaultLayout";

// Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
// Post pages
import PostListPage from "./Pages/Posts/PostListPage";
import PostShow from "./Pages/Posts/PostShow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage}></Route>
          <Route path="/about" Component={AboutPage}></Route>
          <Route path="/posts">
            <Route index Component={PostListPage}></Route>
            <Route path=":id" Component={PostShow}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
