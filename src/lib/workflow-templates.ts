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
  slackConfluenceVectorSearch: {
    name: 'Confluence Vector Search From Slack Message',
    file: `agent:
  name: Confluence-Vector-Search-From-Slack-Message
  description: >
    Lamatic agentic workflow that listens to Slack messages, performs a vector search on Confluence based on the message content, and returns relevant results on Slack.
  version: 1.0

environment:
  SLACK_API_TOKEN: *SLACK_API_TOKEN*
  CONFLUENCE_API_TOKEN: *CONFLUENCE_API_TOKEN*
  OPENAI_API_KEY: *OPENAI_API_KEY*

components:
  - name: slack_listener
    type: SlackListener
    config:
      token: *SLACK_API_TOKEN*
      channels: [*SLACK_CHANNELS*]
  
  - name: message_extractor
    type: TextExtractor
    from: slack_listener
    parameters:
      message_field: 'text'
  
  - name: embedding_generator
    type: EmbeddingGenerator
    config:
      api_key: *OPENAI_API_KEY*
    from: message_extractor
  
  - name: confluence_search
    type: ConfluenceVectorSearch
    config:
      api_token: *CONFLUENCE_API_TOKEN*
      index_name: 'confluence_docs_index'
    from: embedding_generator
  
  - name: slack_responder
    type: SlackResponder
    config:
      token: *SLACK_API_TOKEN*
    from: confluence_search

workflow:
  steps:
    - slack_listener
    - message_extractor
    - embedding_generator
    - confluence_search
    - slack_responder`,
    environmentVars: [
      'SLACK_API_TOKEN',
      'CONFLUENCE_API_TOKEN',
      'OPENAI_API_KEY',
      'SLACK_CHANNELS',
    ],
  },
};

export default workflowTemplates;
