import path from 'path';


export const BUILD_DIR = '.build/';
export const DIST_DIR = 'dist/';
export const SRC_DIR = 'src/';

export const BUILD_ALL = path.join(BUILD_DIR, '**/*');

export const SRC_ALL = path.join(SRC_DIR, '**/*');
export const SRC_HTML = path.join(SRC_DIR, '**/*.html');
export const SRC_INDEX_HTML = path.join(SRC_DIR, 'index.html');
export const SRC_SCRIPT = path.join(SRC_DIR, '**/*.js');

export const SRC_IMAGE = [
  path.join(SRC_DIR, '**/*.+(png|jpg|svg)'),
  path.join(`!${SRC_DIR}`, 'jspm_packages/**/*')
];

export const SRC_STYLE = [
  path.join(SRC_DIR, '**/*.scss'),
  path.join(`!${SRC_DIR}`, 'jspm_packages/**/*')
];

// Build time internal app paths
export const INDEX_SCRIPT_BASE = 'index';
export const INDEX_SCRIPT = `${INDEX_SCRIPT_BASE}.js`;
export const BUILD_INDEX_JS = path.join(BUILD_DIR, INDEX_SCRIPT);
export const SETTINGS = 'config/settings.js';
