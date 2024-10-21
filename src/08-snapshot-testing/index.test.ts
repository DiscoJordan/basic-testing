import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const value1 = [null, 'one', 2];
    const extendedValue1 = {
      value: null,
      next: {
        value: 'one',
        next: { value: 2, next: { value: null, next: null } },
      },
    };

    expect(generateLinkedList(value1)).toStrictEqual(extendedValue1);
  });

  test('should generate linked list from values 2', () => {
    const value2 = [null, 'one', 2, undefined, null];

    expect(generateLinkedList(value2)).toMatchInlineSnapshot(`
      {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": null,
                  "value": null,
                },
                "value": null,
              },
              "value": null,
            },
            "value": 2,
          },
          "value": "one",
        },
        "value": null,
      }
    `);
  });
});
