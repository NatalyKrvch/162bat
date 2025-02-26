module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
      {
        type: 'confirm',
        name: 'hasProps',
        message: 'Does your component have props?',
        default: false,
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.tsx',
        templateFile: 'templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/__test__/{{properCase name}}.test.tsx',
        templateFile: 'templates/component/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/index.ts',
        templateFile: 'templates/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{properCase name}}/types.ts',
        templateFile: 'templates/component/types.ts.hbs',
        skip: data => (!data.hasProps ? 'Skipping types file' : undefined),
      },
    ],
  });
};
