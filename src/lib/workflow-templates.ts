const workflowTemplates = {
  octoOrgCI: {
    name: 'Octo Organization CI',
    file: `name: Octo Organization CI

on:
  push:
    branches: [ $default-branch ]
  pull_request:
    branches: [ $default-branch ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Run a one-line script
        run: echo Hello from Octo Organization
`,
    environmentVars: ['defaultBranch'],
  },
};

export default workflowTemplates;
