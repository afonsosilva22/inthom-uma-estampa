import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Design, Designs } from '../services/designs';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.page.html',
  styleUrls: ['./drafts.page.scss'],
  standalone: false,
})
export class DraftsPage implements OnInit {

  drafts: Design[] = [];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private designService: Designs
  ) { }

  handleEdit(draft: Design) {
    this.router.navigate(['/edit-design'], {
      state: { design: draft }
    });
  }

  async handleDelete(id: string) {
    const alert = await this.alertController.create({
      header: 'Eliminar rascunho',
      message: 'Tens a certeza que queres eliminar este rascunho?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.drafts = this.drafts.filter(d => d.id !== id);
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
    this.drafts = this.designService.getDrafts();
  }
}
