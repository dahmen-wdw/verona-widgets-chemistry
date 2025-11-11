import { Routes } from '@angular/router';
import { PeriodicSystemSelectPage } from '../periodic-system-select-page/periodic-system-select-page';
import { MoleculeEditorPage } from '../molecule-editor-page/molecule-editor-page';

export const enum ShowcasePath {
  PeriodicSystemSelect = 'ps-select',
  MoleculeEditor = 'molecule-editor',
}

export const routes: Routes = [
  {
    path: ShowcasePath.PeriodicSystemSelect,
    component: PeriodicSystemSelectPage,
  },
  {
    path: ShowcasePath.MoleculeEditor,
    component: MoleculeEditorPage,
  },
];
