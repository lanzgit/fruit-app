import { Fruit } from "./fruits";

export interface FruityViceFruit {
  readonly id: number;
  readonly name: string;
  readonly family: string;
  readonly genus: string;
  readonly order: string;
  readonly nutritions: {
    readonly carbohydrates: number;
    readonly protein: number;
    readonly fat: number;
    readonly calories: number;
    readonly sugar: number;
  };
}

export function mapFruityViceToFruit(apiFruit: FruityViceFruit): Fruit {
  return {
    id: apiFruit.id,
    name: apiFruit.name,
    family: apiFruit.family,
    calories: apiFruit.nutritions.calories,
    sugar: apiFruit.nutritions.sugar,
    carbohydrates: apiFruit.nutritions.carbohydrates,
  };
}

const INTERNAL_API_URL = "/api/fruits";

export async function obterTodasFrutas(): Promise<Fruit[]> {
  const response = await fetch(INTERNAL_API_URL, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Erro ao buscar frutas na API interna");
  }

  return response.json();
}
