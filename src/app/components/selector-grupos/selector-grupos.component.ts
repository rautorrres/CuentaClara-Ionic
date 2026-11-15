import { Component } from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-selector-grupos',
  imports: [IonContent, IonList, IonItem, IonLabel, IonButton],
  templateUrl: './selector-grupos.component.html',
  host: { class: 'ion-page' }, // necesario para que ion-content tenga alto dentro de la hoja inferior
})
export class SelectorGruposComponent {}
