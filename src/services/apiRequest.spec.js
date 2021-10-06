import ApiRequest from './apiRequest'
import { datafeeds } from '../mockfeeds'

describe("Services Test", () => {

    test("success", async () => {
        expect.assertions(1);
        const res = await ApiRequest(process.env.REACT_APP_API_DATA);
        expect(res).toStrictEqual(datafeeds);
    });

    test("fails", async () => {
        expect.assertions(1);
        const result = await ApiRequest(process.env.REACT_APP_FAIL_API_DATA);
        expect(result).toStrictEqual([]);
    });
});
