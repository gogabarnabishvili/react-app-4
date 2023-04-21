import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ExpenseFeed from "./pages/ExpenseFeed";
import AddExoense from "./pages/AddExpense";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/sigIn" element={<SignIn />} />
            <Route path="/" element={<ExpenseFeed />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addExoense" element={<AddExoense />} />
        </>
    )
);
function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
