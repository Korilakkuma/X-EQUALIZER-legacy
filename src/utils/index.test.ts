import { extractScriptAsString } from './';

const scriptAsString = `
  let x = 0;

  const incrementX = () => {
    ++x;
  };

  const getX = () => {
    return x;
  };
`;

const scriptContainerString = `export const scriptContainer = () => {
${scriptAsString}
};`;

describe(`${extractScriptAsString.name}`, () => {
  test('should return executable script as string', () => {
    expect(extractScriptAsString(scriptContainerString)).toBe(`\n${scriptAsString}\n`);
  });
});
