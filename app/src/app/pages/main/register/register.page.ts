//#region Imports

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AvatarItem } from '../../../models/interfaces/avatar-item';
import { FooterService } from '../../../services/footer/footer.service';
import { LoginService } from '../../../services/login/login.service';

//#endregion

/**
 * A classe que representa a página que é usada para criar um usuário no aplicativo
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly login: LoginService,
    private readonly toast: ToastController,
    private readonly loading: LoadingController,
    protected readonly footer: FooterService,
  ) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      personAvatarIndex: [0, Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  //#endregion

  //#region Public Properties

  /**
   * A referência do formulário
   */
  public formGroup: FormGroup;

  /**
   * Diz se está enviando esse formulário
   */
  public isSendingForm: boolean = false;

  /**
   * A lista de avatares disponíveis para o usuário
   */
  public readonly listAvatars: AvatarItem[] = [
    {
      personEmoji: 'assets/images/avatar_1.png',
      personColor: '#FFC542',
    },
    {
      personEmoji: 'assets/images/avatar_2.png',
      personColor: '#3DD598',
    },
    {
      personEmoji: 'assets/images/avatar_3.png',
      personColor: '#FF575F',
    },
    {
      personEmoji: 'assets/images/avatar_4.png',
      personColor: '#755FE2',
    },
  ];

  //#endregion

  //#region Public Methods

  /**
   * Método executado quando o formulário é enviado
   */
  public async onSubmit(): Promise<void> {
    if (this.isSendingForm)
      return;

    this.isSendingForm = true;

    const payload = this.formGroup.getRawValue();

    const loading = await this.loading.create({
      cssClass: 'app--loading',
    });

    await loading.present();
    const [isSuccess, result] = await this.login.register(payload);
    await loading.dismiss();

    await this.showMessage(result);

    this.isSendingForm = false;

    if (!isSuccess)
      return;

    await this.router.navigateByUrl(`/main/categories`);
  }

  //#endregion

  //#region Private Methods

  /**
   * Método que exibe a mensagem de erro
   *
   * @param message A mensagem
   */
  private async showMessage(message: string): Promise<void> {
    const toast = await this.toast.create({
      message,
      duration: 5_000,
      position: 'top',
    });

    await toast.present();
  }

  //#endregion

}
