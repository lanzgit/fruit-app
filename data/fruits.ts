export interface Fruit {
    id: number;
    name: string;
    family: string;
    calories?: number;
    sugar?: number;
    carbohydrates?: number;
}
export type CriarFrutaDTO = Omit<Fruit, 'id'>;
export type AtualizarFrutaDTO = Partial<Fruit>;

export const fruits: Fruit[] = [
    { id: 1, name: 'apple', family: 'Rosaceae' },
    { id: 2, name: 'banana', family: 'Musaceae' },
    { id: 3, name: 'cherry', family: 'Rosaceae' },
    { id: 4, name: 'date', family: 'Arecaceae' },
    { id: 5, name: 'elderberry', family: 'Adoxaceae' },
]