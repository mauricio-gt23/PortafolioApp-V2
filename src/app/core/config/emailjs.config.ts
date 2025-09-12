// EmailJS Configuration
export const EMAILJS_CONFIG = {
   // Configurar con tus credenciales de EmailJS
   PUBLIC_KEY: '', // Tu Public Key de EmailJS
   SERVICE_ID: '', // Tu Service ID
   TEMPLATE_ID: '', // Tu Template ID
};

// Ejemplo de uso:
// import emailjs from '@emailjs/browser';
// import { EMAILJS_CONFIG } from './emailjs.config';
//
// emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
//
// emailjs.send(
//   EMAILJS_CONFIG.SERVICE_ID,
//   EMAILJS_CONFIG.TEMPLATE_ID,
//   templateParams
// );
