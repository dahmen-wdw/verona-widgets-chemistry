import { Component, computed, inject, input } from '@angular/core';
import { MoleculeEditorBondingType, MoleculeEditorService } from '../../../services/molecule-editor.service';
import { BondView } from '../../../services/molecule-editor.view';
import { Vector2 } from '../../../services/molecule-editor.model';

@Component({
  selector: 'g[bondView]',
  templateUrl: './svg-bond-view.html',
  styleUrl: './svg-bond-view.scss',
})
export class SvgBondView {
  readonly bondView = input.required<BondView>({ alias: 'bondView' });

  readonly service = inject(MoleculeEditorService);

  readonly bondingType = computed(() => {
    const { bondingType } = this.service.appearance();
    return bondingType;
  });

  readonly ValenceBondingType = MoleculeEditorBondingType.valence;
  readonly ElectronsBondingType = MoleculeEditorBondingType.electrons;

  readonly bondLinePositions = computed((): ReadonlyArray<BondView.LineDef> => {
    const bond = this.bondView();
    return BondView.valenceBondLines(bond, 6);
  });

  readonly bondDotsPositions = computed((): ReadonlyArray<Vector2> => {
    const bond = this.bondView();
    return BondView.electronBondDots(bond, 6);
  });
}
