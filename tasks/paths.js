import path from 'path';


export const BUILD_DIR = 'build/';
export const DIST_DIR = 'dist/';
export const SRC_DIR = 'src/';
export const JSPM_PKG_DIR = path.join(SRC_DIR, 'jspm_packages');

const EXCLUDE = path.join(`!${JSPM_PKG_DIR}`, '**/*');

export const BUILD_ALL = path.join(BUILD_DIR, '**/*');
export const BUILD_SCRIPT = path.join(BUILD_DIR, '**/*.js');

export const SRC_ALL = [path.join(SRC_DIR, '**/*'), EXCLUDE];
export const SRC_HTML = [path.join(SRC_DIR, '**/*.html'), EXCLUDE];
export const SRC_IMAGE = [path.join(SRC_DIR, '**/*.+(png|jpg|svg)'), EXCLUDE];
export const SRC_INDEX_HTML = path.join(SRC_DIR, 'index.html');
export const SRC_SCRIPT = [path.join(SRC_DIR, '**/*.js'), EXCLUDE];
export const SRC_STYLE = [path.join(SRC_DIR, '**/*.scss'), EXCLUDE];

// Build time internal app paths
export const INDEX_SCRIPT_BASE = 'index';
export const INDEX_SCRIPT = `${INDEX_SCRIPT_BASE}.js`;
export const BUILD_INDEX_JS = path.join(BUILD_DIR, INDEX_SCRIPT);
export const SETTINGS = 'config/settings.js';
export const SYSTEM_JS = path.join(JSPM_PKG_DIR, 'system.js*');
export const CONFIG_JS = path.join(SRC_DIR, 'config.js');
