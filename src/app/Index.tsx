import "./styles/index.scss"
import "@/shared/config/i18n/i18n.ts"

import { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Loader } from "@/shared/ui"

import App from "./App"
import { ErrorBoundary } from "./providers/ErrorBoundary"
import { StoreProvider } from "./providers/StoreProvider"
import { ThemeProvider } from "./providers/ThemeProvider/index"

const Index = () => {
	return (
		<BrowserRouter>
			<StoreProvider>
				<ErrorBoundary>
					<ThemeProvider>
						<Suspense fallback={<Loader />}>
							<App />
						</Suspense>
					</ThemeProvider>
				</ErrorBoundary>
			</StoreProvider>
		</BrowserRouter>
	)
}

const domContainer = document.querySelector("#root") as Element | DocumentFragment
const root = ReactDOM.createRoot(domContainer)
root.render(<Index />)
