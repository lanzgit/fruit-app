import { CriarFrutaDTO, Fruit } from "@/data/fruits";
import { FruitService } from "@/service/fruitService";
import { useEffect, useState } from "react";

export function useFruits() {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  useEffect(() => {
    carregarFrutas();
  }, []);

	async function carregarFrutas() {
		const data = await FruitService.obterTodasFrutas();
		setFruits(data);
	}

	function criarFruta(fruit: CriarFrutaDTO) {
		const novaFruta = FruitService.criar(fruit, fruits);
		setFruits([...fruits, novaFruta]);
	}

	function atualizarFruta(id: number, dadosAtualizados: Partial<Fruit>) {
		const frutaAtualizada = FruitService.atualizar(id, dadosAtualizados, fruits);
		if (frutaAtualizada) {
			setFruits(
				fruits.map((fruit) =>
					fruit.id === id ? frutaAtualizada : fruit
				)
			);
		}
	}

	function deletarFruta(id: number) {
		const frutasAtualizadas = FruitService.deletar(id, fruits);
		setFruits(frutasAtualizadas);
	}

	return { fruits, carregarFrutas, criarFruta, atualizarFruta, deletarFruta };
}

