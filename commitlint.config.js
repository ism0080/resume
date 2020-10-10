module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[(\w*)\]\s(.*)$/,
      headerCorrespondence: ['type', 'subject']
    }
  },
  rules: {
    'type-enum': [2, 'always', ['build', 'fix', 'feat', 'patch', 'test', 'lint', 'ts', 'graph', 'api', 'web', 'app']],
    'subject-empty': [2, 'never'],
    'subject-min-length': [2, 'always', 4],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never']
  }
}
