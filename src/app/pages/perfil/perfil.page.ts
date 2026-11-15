import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { linkOutline, shieldCheckmarkOutline } from 'ionicons/icons';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  imports: [IonContent, IonButton, IonIcon],
  templateUrl: './perfil.page.html',
})
export class PerfilPage {
  constructor() {
    addIcons({ linkOutline, shieldCheckmarkOutline });
  }
}
