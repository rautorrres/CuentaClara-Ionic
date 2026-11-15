import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronDownOutline, notificationsOutline, swapHorizontalOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonToolbar, IonButton, IonButtons, IonIcon, IonModal } from '@ionic/angular/standalone';
import { SelectorGruposComponent } from '../../components/selector-grupos/selector-grupos.component';

@Component({
  selector: 'app-inicio',
  imports: [IonContent, IonHeader, IonToolbar, IonButton, IonButtons, IonIcon, IonModal, RouterLink, SelectorGruposComponent],
  templateUrl: './inicio.page.html',
})
export class InicioPage {
  constructor() {
    addIcons({ chevronDownOutline, notificationsOutline, swapHorizontalOutline });
  }
}
