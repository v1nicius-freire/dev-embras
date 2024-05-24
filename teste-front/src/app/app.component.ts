import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ApiService } from './api.service';
import { User } from './user';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DialogModule, ButtonModule, InputTextModule, TableModule, ReactiveFormsModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Cadastro de Usuários'
  users: User[] = []
  visible: boolean = false
  formUser!: FormGroup

  constructor(
    private primengConfig: PrimeNGConfig,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true
    this.formUser = this.formBuilder.group({
      id: [undefined],
      name: [''],
      email: ['']
    })
    this.atualizaListaUsuarios()
  }

  // exibe o formulario do usuario
  showFormUser() {
    this.visible = true
    this.formUser = this.formBuilder.group({
      id: [undefined],
      name: [''],
      email: ['']
    })
  }

  // submit do formulario do usuario
  onSubmit() {
    console.log(this.formUser.getRawValue())
    this.apiService.createUser(this.formUser.getRawValue()).subscribe((user) => {
      console.log(user)
      this.atualizaListaUsuarios()
      this.visible = false
    })
  }

  apagarUsuario(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja excluir?',
      header: 'Confirmar Exclusão',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.apiService.deleteUser(id).subscribe(() => {
          this.atualizaListaUsuarios()
        })
      }
    })
  }

  private atualizaListaUsuarios() {
    this.apiService.getUsers().subscribe((users: User[]) => {
      this.users = users
    })
  }
}