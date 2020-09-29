export class Miquotes {
    showAuthor:boolean;
    constructor(public id: number, public name: string, public author: string, public datePosted: Date){
        this.showAuthor=false;
    }
}
