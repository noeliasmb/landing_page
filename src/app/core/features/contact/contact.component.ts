import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) { // Explicitly specify the type as NgForm
    if (form.valid) {
      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };

      this.http.post('/api/send-email', formData).subscribe(
        (response) => {
          // Handle success
          console.log('Email enviado correctamente.', response);
          alert('Mensaje enviado correctamente!');
          form.reset(); // Reset the form after successful submission
        },
        (error) => {
          // Handle error
          console.error('Error al enviar el email.', error);
          alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo más tarde.');
        }
      );
    }
  }
}
