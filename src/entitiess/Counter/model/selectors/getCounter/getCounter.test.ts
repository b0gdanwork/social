import { type DeepPartial } from "@reduxjs/toolkit"
import { type StoreSchema } from "@/app/providers/StoreProvider"
import { getCounter } from "./getCounter"

describe("getCounter", () => {
	test("selector counter", () => {
		const state: DeepPartial<StoreSchema> = {
			counter: {
				value: 10,
			},
		}

		expect(getCounter(state as StoreSchema)).toEqual({
			value: 10,
		})
	})
})
