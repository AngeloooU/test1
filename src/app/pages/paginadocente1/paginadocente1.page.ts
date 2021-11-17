import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { ActionSheetController, AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-paginadocente1',
  templateUrl: './paginadocente1.page.html',
  styleUrls: ['./paginadocente1.page.scss'],
})
export class Paginadocente1Page implements OnInit {

  modeloUsuario: string;
  modeloContrasena: string;
  modeloMensaje: string;

  constructor(public animationCtrl: AnimationController,
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

    var animacion = this.animationCtrl.create()
      .addElement(document.querySelector('.QR1'))
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateY(10px)')
      .fromTo('opacity', '1', '1');

    animacion.play();
    var animacion = this.animationCtrl.create()
    .addElement(document.querySelector('.QR'))
    .duration(1000)
    .iterations(1)
    .fromTo('transform', 'translateX(0px)', 'translateY(10px)')
    .fromTo('opacity', '1', '1');
  animacion.play();

  }

  mostrarAlerta() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: this.modeloMensaje,
      buttons: ['Aceptar'],
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
}
