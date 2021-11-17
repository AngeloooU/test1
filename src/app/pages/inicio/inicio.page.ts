import { Component, OnInit } from '@angular/core';

import { ActionSheetController, AlertController, AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-iniciO',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {


  constructor(public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public navController: NavController,
    public animationCtrl: AnimationController) { }

  ngOnInit() {

    var animacion1 = this.animationCtrl.create()
      .addElement(document.querySelector('.botonesinicio1'))
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateY(10px)')
      .fromTo('opacity', '1', '1');
    animacion1.play();

    var animacion2 = this.animationCtrl.create()
      .addElement(document.querySelector('.botonesinicio2'))
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateY(10px)')
      .fromTo('opacity', '1', '1');
    animacion2.play();

    var animacion3 = this.animationCtrl.create()
      .addElement(document.querySelector('.botonesinicio3'))
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateY(10px)')
      .fromTo('opacity', '1', '1');
    animacion3.play();

    var animacion4 = this.animationCtrl.create()
      .addElement(document.querySelector('.logo1'))
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateY(10px)')
      .fromTo('opacity', '1', '1');
    animacion4.play(); 
  }
  
  mostrarAlertaFormulario() {
    this.presentAlertPrompt();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Formulario registro',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          id: 'name1-id',
          placeholder: 'Nombre'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Apellido'
        },
        // multiline input.
        {
          name: 'name3',
          id: 'rut',
          type: 'text',
          placeholder: 'Rut'
        },
        {
          name: 'name4',
          type: 'text',
          placeholder: 'Email'
        },
        {
          name: 'name5',
          type: 'text',
          placeholder: 'Carrera'
        },
        {
          name: 'name6',
          type: 'text',
          placeholder: 'Universidad'
        },
        {
          name: 'name7',
          type: 'text',
          placeholder: 'Nombre usuario'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Password'
        },
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


