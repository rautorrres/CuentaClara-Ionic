import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';
import { IonContent, IonButton, IonIcon, IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nuevo',
  imports: [IonContent, IonButton, IonIcon, IonInput, IonItem],
  templateUrl: './nuevo.page.html',
})
export class NuevoPage {
  constructor() {
    addIcons({ cameraOutline });
  }
}
