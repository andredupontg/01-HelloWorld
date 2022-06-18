import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: 'body.component.html'
})

export class BodyComponent {
    firstName: string;
    lastName: string;
    currentYear: number;
    birthYear: number;
    age: number;
    quote: any;
    show: boolean;
    characters: Array<string>;


    constructor() {
        this.firstName = "André";
        this.lastName = "Dupont";
        this.currentYear = new Date().getFullYear();
        this.birthYear = 1999;
        this.age = this.currentYear - this.birthYear;
        this.quote = { author: 'Obi-Wan Kenobi', message: 'Before the dark times ...'};
        this.show = false;
        this.characters = ["Darth Vader", "Darth Maul", "Darth Revan"];
    }
}