import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from './ui/AppLayout'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/notFoundPage';
import ProtectedRoute from './ui/ProtectedRoute';
import MySpacePage from './pages/MySpacePage';
import MyBlackPage from './pages/blackCards/MyBlackPage';
import MyWhitePage from './pages/whiteCards/MyWhitePage';
import CreateBlackCardPage from './pages/blackCards/createBlackCardPage';
import CreateWhiteCardPage from './pages/whiteCards/CreateWhiteCardPage';
import DisplayAllBlackCards from './features/blackCards/DisplayAllBlackCards';
import MyBlackCardsPage from './pages/blackCards/MyBlackCardsPage';
import DisplayAllWhiteCards from './features/whiteCards/DisplayAllWhiteCards';
import MyWhiteCardsPage from './pages/whiteCards/MyWhiteCardsPage';
import RoomPage from './pages/game/RoomPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});


function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
              <Route path="mySpace" element={<ProtectedRoute><MySpacePage /></ProtectedRoute>} />
              {/* Black Cards Space Routes */}
              <Route path="mySpace/BlackCards" element={<ProtectedRoute><MyBlackPage /></ProtectedRoute>} >
                <Route index element={<ProtectedRoute><DisplayAllBlackCards /></ProtectedRoute>} />
                <Route path="allMyCards" element={<ProtectedRoute><MyBlackCardsPage /></ProtectedRoute>} />
                <Route path="createCard" element={<ProtectedRoute><CreateBlackCardPage /></ProtectedRoute>} />
              </Route>
              {/* White Cards Space Routes */}
              <Route path="mySpace/WhiteCards" element={<ProtectedRoute><MyWhitePage /></ProtectedRoute>} >
                <Route index element={<ProtectedRoute><DisplayAllWhiteCards /></ProtectedRoute>} />
                <Route path="allMyCards" element={<ProtectedRoute><MyWhiteCardsPage /></ProtectedRoute>} />
                <Route path="createCard" element={<ProtectedRoute><CreateWhiteCardPage /></ProtectedRoute>} />
              </Route>
              {/* Game Routes */}
              <Route path="room" element={<ProtectedRoute><RoomPage /></ProtectedRoute>} />

            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              marginTop: "3.2rem",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              zIndex: 999999,
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
