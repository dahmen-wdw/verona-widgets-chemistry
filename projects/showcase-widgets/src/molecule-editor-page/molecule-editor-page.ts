import { Component, inject } from '@angular/core';
import {
  provideShowcaseVeronaWidgetService,
  ShowcaseVeronaWidgetConfig,
  ShowcaseVeronaWidgetService,
} from '../service/showcase-verona-widget.service';
import { PsLocale } from 'periodic-system-common';
import { ShowcaseVeronaWidgetDirective } from '../service/showcase-verona-widget.directive';
import { MoleculeEditor } from '../../../molecule-editor-widget/src/molecule-editor/molecule-editor.component';

@Component({
  selector: 'app-molecule-editor-page',
  imports: [ShowcaseVeronaWidgetDirective, MoleculeEditor],
  templateUrl: './molecule-editor-page.html',
  styleUrls: ['./molecule-editor-page.scss', '../widget-page-common/widget-page.scss'],
  providers: [
    provideShowcaseVeronaWidgetService({
      dummySessionId: 'molecule-builder',
      initParameters: {},
      initSharedParameters: {},
    }),
  ],
})
export class MoleculeEditorPage {
  readonly config = inject(ShowcaseVeronaWidgetConfig);
  readonly service = inject(ShowcaseVeronaWidgetService);

  //TODO: Add parameter signals
  readonly stateData = this.service.stateData();

  protected readonly PsLangGerman = PsLocale.German;
  protected readonly PsLangEnglish = PsLocale.English;
  protected readonly PsLangLatin = PsLocale.Latin;
}
