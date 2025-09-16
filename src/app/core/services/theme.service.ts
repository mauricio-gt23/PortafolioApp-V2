import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'light' | 'dark' = 'light';
  private readonly THEME_KEY = 'portfolio-theme';

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    // Verificar si localStorage está disponible (para SSR compatibility)
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem(this.THEME_KEY) as 'light' | 'dark';
      this.currentTheme = savedTheme || 'light';
    }
    this.applyTheme(this.currentTheme);
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    // Aplicar el tema al elemento raíz del documento
    document.documentElement.setAttribute('data-theme', theme);
    
    // También agregar clase CSS para compatibilidad adicional
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }

  public toggleTheme(): void {
    // Alternar entre tema claro y oscuro
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    
    // Guardar la selección en localStorage (con verificación)
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.THEME_KEY, this.currentTheme);
    }
  }

  public setTheme(theme: 'light' | 'dark'): void {
    this.currentTheme = theme;
    this.applyTheme(this.currentTheme);
    
    // Guardar la selección en localStorage
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.THEME_KEY, this.currentTheme);
    }
  }

  public isDarkTheme(): boolean {
    return this.currentTheme === 'dark';
  }

  public isLightTheme(): boolean {
    return this.currentTheme === 'light';
  }

  public getCurrentTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }
}