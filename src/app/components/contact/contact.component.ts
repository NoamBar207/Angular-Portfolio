import { Component, OnInit } from '@angular/core';
import { ISectionHeader } from 'src/app/interfaces/section-header.model';
import emailjs from '@emailjs/browser';
import { FormGroup, FormControl } from '@angular/forms';
import { IAboutMeCard } from 'src/app/interfaces/about.me.card.model';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  info: ISectionHeader = {
    main: 'CONTACT ME',
    prev: 'Get In Touch',
  };

  contactCards: IAboutMeCard[] = [
    {
      title: 'Email',
      desc: 'noambar2845@gmail.com',
      icon: 'fa-solid fa-envelope',
      link: 'mailto:noambar2845@gmail.com',
    },
    {
      title: 'Facebook',
      desc: 'Noam Bar',
      icon: 'fa-brands fa-facebook',
      link: 'https://m.me/100010249146928',
    },
    {
      title: 'Whatsapp',
      desc: '+972-52-627-8764',
      icon: 'fa-brands fa-whatsapp',
      link: 'https://wa.me/+972526278764',
    },
  ];

  // emailForm!: new FormGroup({
  //   name: new FormControl();
  //   email:  new FormControl();
  //   msg:  new FormControl();
  // });

  handleFoucusOut($event: any): void {
    if (!$event.target.validity.valid && $event.target.value.length >= 1) {
      $event.target.style = 'border-bottom: 1px solid red';
      $event.target.nextElementSibling.style = 'top: -10px; font-size: 12px;';
    } else $event.target.style = 'border-bottom: 1px solid $clr-text-main';
  }

  sendEmail($event: Event) {
    $event.preventDefault();

    try {
      emailjs.sendForm(
        'MyPortfolio',
        'template_x48hjib',
        $event.target as HTMLFormElement,
        'i50CZHs_M3GM04UpE'
      );
      // this.emailForm.reset();
      // console.log(e)
    } catch (err) {
      console.log(err);
    }
    // this.name = '';
    // this.email = '';
    // this.message = '';
  }

  clearForm() {}
}
