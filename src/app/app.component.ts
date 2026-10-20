import './training';
import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import { Collection } from './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName = 'РУМТИБЕТ';

  constructor() {
    console.log('Red — основной?', this.isPrimaryColor(Color.Red));
    console.log('Yellow — основной?', this.isPrimaryColor(Color.Yellow));

    this.saveLastVisitDate();
    this.saveVisitCount();

    const strings = new Collection<string>(['Привет', 'Мир']);
    console.log('Строки:', strings.getAll());
    strings.remove(0);
    console.log('После удаления:', strings.getAll());

    const numbers = new Collection<number>([1, 2, 3]);
    console.log('Числа:', numbers.getAll());
    numbers.replace(0, 100);
    console.log('После замены:', numbers.getAll());
  }

  isPrimaryColor(color: Color): boolean {
    return [Color.Red, Color.Green, Color.Blue].includes(color);
  }

  saveLastVisitDate(): void {
    localStorage.setItem('lastVisitDate', new Date().toISOString());
  }

  saveVisitCount(): void {
    const current = Number(localStorage.getItem('visitCount') || 0);
    localStorage.setItem('visitCount', String(current + 1));
  }
}