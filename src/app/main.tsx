import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { Provider } from "react-redux";
import { PopupProvider } from "../components/popup-context/popup-context.tsx";
import { store } from "../store/store.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<PopupProvider>
					<RouterProvider router={router}/>
				</PopupProvider>
			</Provider>
		</HelmetProvider>
	</StrictMode>,
);
