/* eslint-disable i18next/no-literal-string */
import { render } from "@testing-library/react"
import Form from "./Form"

describe("test Form render", () => {
	test("", () => {
		const { container } = render(<Form error={undefined}>Form</Form>)

		expect(container.getElementsByTagName("form")[0]).toBeInTheDocument()
	})
})
