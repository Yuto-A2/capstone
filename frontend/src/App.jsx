import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import YourProgress from "./components/YourProgress";
import SetYourPlan from "./pages/SetYourPlan";
import Achievement from "./components/Achieve";
import Complete from "./pages/TrackMyProgress";
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <SetYourPlan /> : <Home />} />
        <Route path="/SignUp" element={user ? <YourProgress /> : <SignUp />} />
        <Route path="/YourProgress/:id" element={user ? <YourProgress /> : <Navigate to="/" />} />
        {/* <Route path="/YourProgress/:id" element={<YourProgress />} /> */}
        <Route path="/SetYourPlan/:id" element={<SetYourPlan />} />
        <Route path="/TrackMyProgress/:id" element={<Complete />} />
        <Route path="/Achievement/:id" element={<Achievement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
