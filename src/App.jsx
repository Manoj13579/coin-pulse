import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import CryptoTable from "./Components/Layout/CryptoTable";
import SearchResult from "./Components/SearchResult";
import NotFound from "./Components/NotFound";


  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element = {<Layout />}>
        <Route
        index element = {
            <>
            <CryptoTable />
            </>
        }
        />
        <Route path="search-result/:id" element={<SearchResult />} />
        <Route path="*" element={<NotFound />} />
        </Route>
    )
  )


const App = () => {




  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App;