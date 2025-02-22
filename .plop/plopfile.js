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
    ],
  })

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/app/{{dashCase name}}/page.tsx',
        templateFile: 'templates/page/page.tsx.hbs',
      },
    ],
  })
}
