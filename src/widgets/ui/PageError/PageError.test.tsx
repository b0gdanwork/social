/* eslint-disable i18next/no-literal-string */
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import ProviderTest from "@/shared/lib/helpers/forTest/componentRender"
import PageError from "./PageError"

describe("test AppButton", () => {
	test("", async () => {
		const { container } = render(
			<ProviderTest>
				<PageError />
			</ProviderTest>
		)

		expect(container.getElementsByTagName("div")[0]).toBeInTheDocument()
	})
})
