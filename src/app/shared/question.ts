export class Question {
    id: number;
    categoryId: number;
    value: number;
    text: string;
    answered: boolean;
    correct: boolean; // if question has been answered correctly or not
    brick?: 'bronze' |  'silver' | 'gold' | null;
}
