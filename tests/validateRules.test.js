import UpdateDom from '../scripts/UpdateDom';
import rules from '../scripts/app';

describe('Remplacement des ·', () => {
    const updateDom = new UpdateDom();

    const testCases = [
        { input: 'abonné', expected: 'abonné' },
        { input: 'abonné·e', expected: 'abonné' },
        { input: 'abonné·es', expected: 'abonnés' },
        { input: 'abonné·e·s', expected: 'abonnés' },
        { input: 'Les abonné·e·s sont ravi·e·s', expected: 'Les abonnés sont ravis' }
    ];

    testCases.forEach(({ input, expected }) => {
        test(`Transforme "${input}" en "${expected}"`, () => {
            const result = updateDom.replace(input, rules);

            expect(result).toBe(expected);
        });
    });
});

describe('Replacement des specifiques', () => {
    const updateDom = new UpdateDom();
    const testCases = [
        { input: 'commentateur·rices', expected: 'commentateurs' },
    ]

    testCases.forEach(({ input, expected }) => {
        test(`Transforme "${input}" en "${expected}"`, () => {
            const result = updateDom.replace(input, rules);

            expect(result).toBe(expected);
        });
    });
})
