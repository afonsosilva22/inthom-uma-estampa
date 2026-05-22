import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Design, Designs } from '../services/designs';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.page.html',
  styleUrls: ['./designs.page.scss'],
  standalone: false,
})

export class DesignsPage implements OnInit {

  // Guarda o id do design que está a ser eliminado para ativar a animação de fade-out.
  // null significa que nada está a ser eliminado.
  deletingId: string | null = null;

  designs: Design[] = [];

  // Router permite navegar entre páginas, AlertController mostra popups de confirmação.
  constructor(
    private router: Router,
    private alertController: AlertController,
    private designService: Designs
  ) { }

  // Encontra o design pelo id e inverte o valor de isPublic.
  handleTogglePublic(id: string, isPublic: boolean) {
    const design = this.designs.find(d => d.id === id);
    if (design) {
      design.isPublic = !isPublic;
    }
  }

  // Navega para a página de edição, passando o design através do estado do router.
  handleEdit(design: Design) {
    this.router.navigate(['/edit-design'], {
      state: { design }
    });
  }

  // Mostra um diálogo de confirmação antes de eliminar.
  // async/await porque alertController.create() e alert.present() são promessas.
  async handleDelete(id: string) {
    const alert = await this.alertController.create({
      header: 'Eliminar design',
      message: 'Tens a certeza que queres eliminar este design?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {

            // Marca como "a eliminar" para que a animação de fade-out seja aplicada ao cartão.
            this.deletingId = id;

            // Aguarda 300ms para a animação terminar e depois remove o design da lista.
            // .filter() devolve um novo array sem o design eliminado,
            // o que faz com que o Angular volte a renderizar a lista.
            setTimeout(() => {
              this.designs = this.designs.filter(d => d.id !== id);
              this.deletingId = null;
            }, 300);
          }
        }
      ]
    });
    await alert.present();
  }

  // Navega para a página de criação de encomenda, passando o design pelo estado do router.
  handleOrder(design: Design) {
    this.router.navigate(['/create-order'], {
      state: { selectedDesign: design }
    });
  }

  ngOnInit() {
    this.designs = this.designService.getDesigns();
  }
}
