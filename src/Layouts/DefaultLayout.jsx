import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <div className="container mt-5">
        <Outlet></Outlet>
      </div>
    </>
  );
}
