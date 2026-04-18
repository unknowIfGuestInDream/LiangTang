const data = [
  {
    title: 'genCode',
    subtitle: 'genCode',
    link: 'https://github.com/unknowIfGuestInDream/genCode',
    image: '/images/projects/genCode.png',
    date: '2021-06-18',
    desc:
      'It is used to generate java code through stored procedures of databases such as oracle, '
      + 'and to generate crud stored procedures according to database tables, etc.',
  },
  {
    title: 'javafxTool',
    subtitle: 'javafxTool',
    link: 'https://github.com/unknowIfGuestInDream/javafxTool',
    image: '/images/projects/javafxTool.png',
    date: '2022-10-16',
    desc:
      'Scaffolding for javafx development based on JDK17, JavaFx21, controlsfx 11 and maven.',
  },
  {
    title: 'eclipse-openexplorer',
    subtitle: 'eclipse-openexplorer',
    link: 'https://github.com/tlcsdm/eclipse-openexplorer',
    image: '/images/projects/openexplorer.png',
    date: '2025-07-18',
    desc:
        'OpenExplorer is a plugin for Eclipse, it opened the files selected in “Package Explorer” and “Navigator” in the system file browser.',
  },
  {
    title: 'eclipse-iconpreview',
    subtitle: 'eclipse-iconpreview',
    link: 'https://github.com/tlcsdm/eclipse-iconpreview',
    image: '/images/projects/iconpreview.png',
    date: '2025-07-18',
    desc:
        'IconPreview is a lightweight Eclipse plugin that allows you to preview image files in the Eclipse "Package Explorer" view.',
  },
  {
    title: 'eclipse-translation',
    subtitle: 'eclipse-translation',
    link: 'https://github.com/tlcsdm/eclipse-translation',
    image: '/images/projects/translation.png',
    date: '2025-07-18',
    desc:
        'This plugin integrates translation capabilities into the Eclipse IDE.',
  },
  {
    title: 'eclipse-minimap',
    subtitle: 'eclipse-minimap',
    link: 'https://github.com/tlcsdm/eclipse-minimap',
    image: '/images/projects/minimap.png',
    date: '2025-07-18',
    desc:
        'Eclipse plugin provides awesome way to navigate your source code.',
  },
  {
    title: 'eclipse-fullscreen',
    subtitle: 'eclipse-fullscreen',
    link: 'https://github.com/tlcsdm/eclipse-fullscreen',
    image: '/images/projects/fullscreen.png',
    date: '2025-08-19',
    desc:
        'Eclipse plugin to make Eclipse go fullscreen and save space.',
  },
  {
    title: 'eclipse-folding',
    subtitle: 'eclipse-folding',
    link: 'https://github.com/tlcsdm/eclipse-folding',
    image: '/images/projects/folding.png',
    date: '2025-08-19',
    desc:
        'This plugin enhances code folding in Eclipse IDE.',
  },
  {
    title: 'eclipse-autofill-arguments',
    subtitle: 'eclipse-autofill-arguments',
    link: 'https://github.com/tlcsdm/eclipse-autofill-arguments',
    image: '/images/projects/autofill.gif',
    date: '2025-12-16',
    desc:
        'This plugin guesses the call parameters by the callee parameter names.',
  },
  {
    title: 'eclipse-generateAllSetter',
    subtitle: 'eclipse-generateAllSetter',
    link: 'https://github.com/tlcsdm/eclipse-generateAllSetter',
    image: '/images/projects/generateAllSetter.gif',
    date: '2025-12-16',
    desc:
        'This plugin generates call to setter method value for class.',
  },
  {
    title: 'eclipse-method-sorter',
    subtitle: 'eclipse-method-sorter',
    link: 'https://github.com/tlcsdm/eclipse-method-sorter',
    image: '/images/projects/methodSorter.gif',
    date: '2025-12-16',
    desc:
        'This plugin provides techniques to sort methods in Java-classes, aiming to increase the readability of the source code.',
  },
  {
    title: 'eclipse-fixcnchar',
    subtitle: 'eclipse-fixcnchar',
    link: 'https://github.com/tlcsdm/eclipse-fixcnchar',
    image: '/images/projects/fixcnchar.png',
    date: '2025-12-16',
    desc:
        '能够自动将全角中文标点（如中文逗号、分号、句号、引号等）替换为半角标点。该工具帮助开发者在编码时保持标点统一，无需频繁切换输入法。',
  },
  {
    title: 'eclipse-multicursor',
    subtitle: 'eclipse-multicursor',
    link: 'https://github.com/tlcsdm/eclipse-multicursor',
    image: '/images/projects/multicursor.gif',
    date: '2025-12-16',
    desc:
        'Multiple cursor support for Eclipse IDE',
  },
  {
    title: 'eclipse-maven-view',
    subtitle: 'eclipse-maven-view',
    link: 'https://github.com/tlcsdm/eclipse-maven-view',
    image: '/images/projects/mavenview.png',
    date: '2025-12-16',
    desc:
        'A plug-in that recreates IntelliJ IDEA\'s Maven View for Eclipse.',
  },
  {
    title: 'eclipse-copyright',
    subtitle: 'eclipse-copyright',
    link: 'https://github.com/tlcsdm/eclipse-copyright',
    image: '/images/projects/document.png',
    date: '2025-06-30',
    desc:
        'Fork of Eclipse-Copyright-Generator for generating copyright headers.',
  },
  {
    title: 'eclipse-renesas-config-editor',
    subtitle: 'eclipse-renesas-config-editor',
    link: 'https://github.com/tlcsdm/eclipse-renesas-config-editor',
    image: '/images/projects/document.png',
    date: '2025-07-07',
    desc:
        'Registers Renesas project config files to open with Eclipse\'s XML editor.',
  },
  {
    title: 'eclipse-renesas-qe-devkit',
    subtitle: 'eclipse-renesas-qe-devkit',
    link: 'https://github.com/tlcsdm/eclipse-renesas-qe-devkit',
    image: '/images/projects/document.png',
    date: '2025-07-07',
    desc:
        'Aggregation plugin containing development plugins used for Renesas QE development.',
  },
  {
    title: 'eclipse-bpep',
    subtitle: 'eclipse-bpep',
    link: 'https://github.com/tlcsdm/eclipse-bpep',
    image: '/images/projects/eclipse-bpep.jpg',
    date: '2025-08-24',
    desc:
        'Builder Pattern Eclipse Plugin.',
  },
  {
    title: 'eclipse-instasearch',
    subtitle: 'eclipse-instasearch',
    link: 'https://github.com/tlcsdm/eclipse-instasearch',
    image: '/images/projects/eclipse-instasearch.png',
    date: '2025-12-18',
    desc:
        'Quick workspace file search plugin for Eclipse with instant results.',
  },
  {
    title: 'vscode-fixcnchar',
    subtitle: 'vscode-fixcnchar',
    link: 'https://github.com/tlcsdm/vscode-fixcnchar',
    image: '/images/projects/fixcnchar.png',
    date: '2026-01-04',
    desc:
        'VSCode plugin that replaces full-width Chinese punctuation with half-width punctuation.',
  },
  {
    title: 'vscode-iconpreview',
    subtitle: 'vscode-iconpreview',
    link: 'https://github.com/tlcsdm/vscode-iconpreview',
    image: '/images/projects/iconpreview.png',
    date: '2026-01-06',
    desc:
        'IconPreview is a lightweight VSCode plugin that previews image files.',
  },
  {
    title: 'vscode-translation',
    subtitle: 'vscode-translation',
    link: 'https://github.com/tlcsdm/vscode-translation',
    image: '/images/projects/translation.png',
    date: '2026-01-07',
    desc:
        'VSCode plugin for translation.',
  },
  {
    title: 'vscode-java-method-sorter',
    subtitle: 'vscode-java-method-sorter',
    link: 'https://github.com/tlcsdm/vscode-java-method-sorter',
    image: '/images/projects/methodSorter.gif',
    date: '2026-01-10',
    desc:
        'Sorts methods in Java classes to improve code readability in VSCode.',
  },
  {
    title: 'vscode-java-autofill-arguments',
    subtitle: 'vscode-java-autofill-arguments',
    link: 'https://github.com/tlcsdm/vscode-java-autofill-arguments',
    image: '/images/projects/autofill.gif',
    date: '2026-01-11',
    desc:
        'Guesses Java call arguments based on callee parameter names in VSCode.',
  },
  {
    title: 'vscode-patchReader',
    subtitle: 'vscode-patchReader',
    link: 'https://github.com/tlcsdm/vscode-patchReader',
    image: '/images/projects/vscode-patchReader.png',
    date: '2026-01-30',
    desc:
        'Visualizes patch and diff files in VSCode.',
  },
  {
    title: 'vscode-lvgl-builder',
    subtitle: 'vscode-lvgl-builder',
    link: 'https://github.com/tlcsdm/vscode-lvgl-builder',
    image: '/images/projects/vscode-lvgl-builder.png',
    date: '2026-02-05',
    desc:
        'LVGL drag-and-drop code generation plugin for VSCode.',
  },
  {
    title: 'vscode-javafx-support',
    subtitle: 'vscode-javafx-support',
    link: 'https://github.com/tlcsdm/vscode-javafx-support',
    image: '/images/projects/vscode-javafx-support.png',
    date: '2026-02-26',
    desc:
        'JavaFX support plugin for VSCode.',
  },
  {
    title: 'vscode-git-blame-info',
    subtitle: 'vscode-git-blame-info',
    link: 'https://github.com/tlcsdm/vscode-git-blame-info',
    image: '/images/projects/vscode-git-blame-info.gif',
    date: '2026-03-08',
    desc:
        'Displays color-coded git blame annotations in the VSCode editor gutter.',
  },
  {
    title: 'vscode-json-tree-view',
    subtitle: 'vscode-json-tree-view',
    link: 'https://github.com/tlcsdm/vscode-json-tree-view',
    image: '/images/projects/vscode-json-tree-view.png',
    date: '2026-03-28',
    desc:
        'Provides a visual tree view for browsing, searching, and querying JSON files.',
  },
  {
    title: 'tlstudio',
    subtitle: 'tlstudio',
    link: 'https://github.com/unknowIfGuestInDream/tlstudio',
    image: '/images/projects/SWT_Example.png',
    date: '2024-11-16',
    desc:
        'Currently includes SWT examples, and will support jface and other examples in the future.',
  },
  {
    title: 'Document',
    subtitle: 'Document',
    link: 'https://www.tlcsdm.com',
    image: '/images/projects/document.png',
    date: '2021-01-11',
    desc: 'Knowledge base built with docsify.',
  },
  {
    title: 'tlcsdm-common',
    subtitle: 'tlcsdm-common',
    image: '/images/projects/tlcsdm_common.png',
    date: '2022-04-23',
    desc: 'Common Toolkit for tlcsdm.',
  },
];

export default data;
