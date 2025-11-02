import { CriarFrutaDTO, Fruit } from "@/data/fruits";
import { obterTodasFrutas } from "@/data/fruity-vice-api";

export class FruitService {
  static async obterTodasFrutas(): Promise<Fruit[]> {
    return await obterTodasFrutas();
  }

  static criar(Fruit: CriarFrutaDTO, currentFruits: Fruit[]): Fruit {
	return {
	  id: this.proximoId(currentFruits),
	  ...Fruit,
	};
  }

  static atualizar(id: number, dadosAtualizados: Partial<Fruit>, currentFruits: Fruit[]): Fruit | null {
	const frutaIndex = currentFruits.findIndex((fruit) => fruit.id === id);
	if (frutaIndex === -1) {
	  return null;
	}
	const frutaAtualizada = {
	  ...currentFruits[frutaIndex],
	  ...dadosAtualizados,
	};

	return frutaAtualizada;
  }

  static deletar(id: number, currentFruits: Fruit[]): Fruit[] {
	return currentFruits.filter((fruit) => fruit.id !== id);
  }

  static proximoId(currentFruits: Fruit[]): number {
	const ids = currentFruits.map((fruit) => fruit.id);
	return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
}
