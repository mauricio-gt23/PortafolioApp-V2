import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

export interface ContactForm {
   name: string;
   email: string;
   subject: string;
   message: string;
}

@Injectable({
   providedIn: 'root',
})
export class EmailService {
   constructor() {
      // Inicializar EmailJS con la clave pública
      if (EMAILJS_CONFIG.PUBLIC_KEY) {
         emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      }
   }

   // Método para enviar email de contacto
   async sendContactEmail(formData: ContactForm): Promise<boolean> {
      try {
         if (
            !EMAILJS_CONFIG.PUBLIC_KEY ||
            !EMAILJS_CONFIG.SERVICE_ID ||
            !EMAILJS_CONFIG.TEMPLATE_ID
         ) {
            console.error(
               'EmailJS no está configurado correctamente. Revisa emailjs.config.ts'
            );
            return false;
         }

         const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Mauricio', // Cambiar por tu nombre
         };

         const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            templateParams
         );

         console.log('Email enviado exitosamente:', response);
         return true;
      } catch (error) {
         console.error('Error al enviar email:', error);
         return false;
      }
   }

   // Método para validar configuración de EmailJS
   isConfigured(): boolean {
      return !!(
         EMAILJS_CONFIG.PUBLIC_KEY &&
         EMAILJS_CONFIG.SERVICE_ID &&
         EMAILJS_CONFIG.TEMPLATE_ID
      );
   }

   // Método para obtener el estado de la configuración
   getConfigStatus(): { configured: boolean; message: string } {
      if (this.isConfigured()) {
         return {
            configured: true,
            message: 'EmailJS está configurado correctamente',
         };
      }

      return {
         configured: false,
         message:
            'EmailJS requiere configuración. Actualiza src/app/core/config/emailjs.config.ts con tus credenciales',
      };
   }
}
