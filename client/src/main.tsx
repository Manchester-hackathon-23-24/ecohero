import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={new QueryClient()}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        {/* <Auth0Provider
                domain="dev-wdae0qex707tju8c.us.auth0.com"
                clientId="pwwfmOSZGHNim15RjZtoagvtW99KmyaO"
                authorizationParams={{
                    redirect_uri: window.location.origin,
                    prompt: "login",
                    scope: 
                }}
            > */}
                        <App />
                    </PersistGate>
                </Provider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>  
            {/* </Auth0Provider> */}
        </BrowserRouter>
    </React.StrictMode>
);
