import React, { Component, type ErrorInfo, type ReactNode } from "react"
import { PageError } from "@/widgets/ui"

interface Props {
	children?: ReactNode
}

interface State {
	hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	}

	public static getDerivedStateFromError(_: Error): State {
		return {
			hasError: true,
		}
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("ErrorBoundary Uncaught error:", error, errorInfo)
	}

	public render() {
		if (this.state.hasError) {
			return <PageError />
		}

		return this.props.children
	}
}

export default ErrorBoundary
