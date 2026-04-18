import data from '../data/projects';

const getTitleSet = () => new Set(data.map((project) => project.title));

test('includes tlcsdm eclipse plugin projects', () => {
  const titles = getTitleSet();
  [
    'eclipse-copyright',
    'eclipse-renesas-config-editor',
    'eclipse-renesas-qe-devkit',
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

test('uses README/repo-referenced images for newly added plugin projects', () => {
  const projectByTitle = new Map(data.map((project) => [project.title, project]));
  expect(projectByTitle.get('eclipse-bpep').image).toBe('/images/projects/eclipse-bpep.jpg');
  expect(projectByTitle.get('eclipse-instasearch').image).toBe('/images/projects/eclipse-instasearch.png');
  expect(projectByTitle.get('vscode-patchReader').image).toBe('/images/projects/vscode-patchReader.png');
  expect(projectByTitle.get('vscode-lvgl-builder').image).toBe('/images/projects/vscode-lvgl-builder.png');
  expect(projectByTitle.get('vscode-javafx-support').image).toBe('/images/projects/vscode-javafx-support.png');
  expect(projectByTitle.get('vscode-git-blame-info').image).toBe('/images/projects/vscode-git-blame-info.gif');
  expect(projectByTitle.get('vscode-json-tree-view').image).toBe('/images/projects/vscode-json-tree-view.png');
});
