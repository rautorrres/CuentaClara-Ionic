import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bienvenida',
  imports: [IonContent, IonButton, RouterLink],
  templateUrl: './bienvenida.page.html',
})
export class BienvenidaPage {
}
