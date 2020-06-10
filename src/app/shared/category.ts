import { Question } from './question';

export class Category {
    id: number;
    name: string;
    questions: Question[];
    answered: boolean;
    correct: boolean; // if question has been answered correctly or not
    locked: boolean;
    text: string;
}
