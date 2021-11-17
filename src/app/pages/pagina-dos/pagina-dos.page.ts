import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-pagina-dos',
  templateUrl: './pagina-dos.page.html',
  styleUrls: ['./pagina-dos.page.scss'],
})
export class PaginaDosPage implements OnInit {

  modeloUsuario: string;
  modeloContrasena: string;
  modeloMensaje: string;

  constructor(public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public navController: NavController) { }

  ngOnInit() {
  }

  validarLogin() {
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);

    if(this.modeloUsuario === 'ANGELO' && this.modeloContrasena === '1234') {
      console.log('login correcto');
      this.navController.navigateRoot('pagina-dos');
    } else {
      this.modeloMensaje = "Usuario o Contraseña Inválidos";
      console.log('login incorrecto');
      this.mostrarAlerta();
    }

  }

  mostrarActionSheet() {
    this.presentActionSheet();
  }

  mostrarAlerta() {
    this.presentAlert();
  }

  mostrarAlertaConfirmacion() {
    this.presentAlertConfirm();
  }

  mostrarAlertaFormulario() {
    this.presentAlertPrompt();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Lista de Acciones',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          cssClass: 'rojo',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
            var total = 1 + 2;
            console.log('total: ' + total);
          }
        }, 
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, 
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          }
        }, 
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, 
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: this.modeloMensaje,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'txt_nombre',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }
}
