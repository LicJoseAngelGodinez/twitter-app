import * as utils from './utils'
import { datafeeds } from '../mockfeeds'

describe('Testing utils functions', () => {
    const feeds = datafeeds.data;

    test('getTopFiveData should return 5 elements', () => {
        const result = utils.getTopFiveData(feeds);
        expect(result.length).toBe(5);
    });

    test('sortFeeds should sort the array of elements', () => {
        const top5 = utils.getTopFiveData(feeds);
        const result = utils.sortFeeds(top5);

        const expected = JSON.stringify(result[0]);
        const match = JSON.stringify(feeds[2]);

        expect(expected).toEqual(match);
    });
});
