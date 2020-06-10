export class Question {
    id: number;
    categoryId: number;
    value: any;
    text: string;
    answered: boolean;
    correct: boolean; // if question has been answered correctly or not
    brick?: 'bronze' |  'silver' | 'gold' | null;
}
