export class ListItem {    id: number;    name: string;    theme: string;    views: number;    date: string;}export class Theme {    static count = 0;    id: number;    name: string;    constructor(m: string) {        this.id = ++Theme.count;        this.name = m;    }}