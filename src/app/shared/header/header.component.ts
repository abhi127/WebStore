import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginModalComponent } from '../../shared/login-modal/login-modal.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('confirmationModal') private modalComponent!: LoginModalComponent;

  modalStyle: string = 'modal-style-success';
  modalTitle: string = 'LOGIN';
  modalBody: string = 'This is a Success Confirmation message';
  modalButtonColor: string = 'btn-success';

  ngOnInit(){

  }
  async openModal() {
    return await this.modalComponent.open();
  }

  getConfirmationValue(value: any) {
    if (value == 'Save click') {
      console.log(value);
    }
  }

  open() {
    this.openModal();
  }
}