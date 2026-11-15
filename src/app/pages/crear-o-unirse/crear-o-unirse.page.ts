import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-crear-o-unirse',
  imports: [IonContent, IonButton, IonInput, IonItem, RouterLink],
  templateUrl: './crear-o-unirse.page.html',
})
export class CrearOUnirsePage {
}
