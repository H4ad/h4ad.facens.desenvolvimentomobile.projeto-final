//#region Imports

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FooterService } from '../../../services/footer/footer.service';
import { LoginService } from '../../../services/login/login.service';

//#endregion

/**
 * A classe que representa a página que é usada para entrar no aplicativo
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

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
      username: ['', Validators.required],
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
      cssClass: 'bird--loading',
    });

    await loading.present();
    const [isSuccess, result] = await this.login.performLogin(payload);
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
