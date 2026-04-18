import data from '../data/projects';

const getTitleSet = () => new Set(data.map((project) => project.title));

test('includes tlcsdm eclipse plugin projects', () => {
  const titles = getTitleSet();
  [
    'eclipse-copyright',
    'eclipse-renesas-config-editor',
    'eclipse-bpep',
    'eclipse-instasearch',
  ].forEach((title) => {
    expect(titles.has(title)).toBe(true);
  });
});

test('includes tlcsdm vscode plugin projects', () => {
  const titles = getTitleSet();
  [
    'vscode-fixcnchar',
    'vscode-iconpreview',
    'vscode-translation',
    'vscode-java-method-sorter',
    'vscode-java-autofill-arguments',
    'vscode-patchReader',
    'vscode-lvgl-builder',
    'vscode-javafx-support',
    'vscode-git-blame-info',
    'vscode-json-tree-view',
  ].forEach((title) => {
    expect(titles.has(title)).toBe(true);
  });
});
