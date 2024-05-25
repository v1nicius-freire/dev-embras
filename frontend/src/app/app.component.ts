import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ApiService } from './api.service';
import { User } from './user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DialogModule, ButtonModule, InputTextModule, TableModule, ReactiveFormsModule, ConfirmDialogModule, ToastModule, CommonModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Cadastro de Usuários'
  users: User[] = []
  visible: boolean = false
  formUser!: FormGroup
  submitted = false

  constructor(
    private primengConfig: PrimeNGConfig,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true
    this.novoFormUser()
    this.atualizaListaUsuarios()
  }

  // exibe o formulario do usuario
  showFormUser() {
    this.visible = true
    this.novoFormUser()
  }

  // submit do formulario do usuario
  onSubmit() {
    this.submitted = true
    if (this.formUser.valid) {
      this.apiService.createUser(this.formUser.getRawValue()).subscribe(() => {
        this.atualizaListaUsuarios()
        this.visible = false
      })
      this.submitted = false
    }
  }

  apagarUsuario(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja excluir?',
      header: 'Confirmar Exclusão',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-outlined p-button-sm p-button-danger",
      rejectButtonStyleClass: "p-button-sm",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.apiService.deleteUser(id).subscribe(() => {
          this.atualizaListaUsuarios()
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'O usuário foi excluído!' })
        })
      }
    })
  }

  private atualizaListaUsuarios() {
    this.apiService.getUsers().subscribe((users: User[]) => {
      this.users = users
    })
  }

  private novoFormUser() {
    this.formUser = this.formBuilder.group({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    })
  }
}