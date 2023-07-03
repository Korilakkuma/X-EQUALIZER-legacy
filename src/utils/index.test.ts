import { extractScriptAsString, deleteNamespace } from '/src/utils';

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

const scriptWithNamespace = `
  const graphicequalizer = new __NAMESPACE__.GraphicEqualizer(window.X.get());

  const f0 = __NAMESPACE__.FREQUENCIES[0];

  graphicequalizer.param(__NAMESPACE__.FREQUENCIES[1], f0);

  Object.keys(__NAMESPACE__.PRESETS).forEach((preset) => {
  });

  const canvas  = document.createEleemnt('canvas');
  const context = canvas.getContext('2d');
  const knob    = new __NAMESPACE__.Knob(canvas, context);
`;

const scriptWithoutNamespace = `
  const graphicequalizer = new GraphicEqualizer(window.X.get());

  const f0 = FREQUENCIES[0];

  graphicequalizer.param(FREQUENCIES[1], f0);

  Object.keys(PRESETS).forEach((preset) => {
  });

  const canvas  = document.createEleemnt('canvas');
  const context = canvas.getContext('2d');
  const knob    = new Knob(canvas, context);
`;

describe(`${extractScriptAsString.name}`, () => {
  test('should return executable script as string', () => {
    expect(extractScriptAsString(scriptContainerString)).toBe(`\n${scriptAsString}\n`);
  });
});

describe(`${deleteNamespace.name}`, () => {
  test('should return script that does not have namespace', () => {
    expect(deleteNamespace(scriptWithNamespace)).toBe(scriptWithoutNamespace);
  });
});
