"use client";

import { Fruit } from "@/data/fruits";

interface TableProps {
  readonly frutas: Fruit[];
  readonly onEdit: (fruit: Fruit) => void;
  readonly onDelete: (fruit: Fruit) => void;
}

export function FruitTable({ frutas, onEdit, onDelete }: TableProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-black mb-6">Lista de Frutas</h2>

      {frutas.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          Nenhuma fruta cadastrada.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-4 py-3 text-left text-sm font-semibold text-black">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black">
                  Nome
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black">
                  Família
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black">
                  Calorias
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black">
                  Açúcar
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-black">
                  Carboidratos
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-black">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {frutas.map((fruit, index) => (
                <tr
                  key={fruit.id}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-3 text-sm text-black">
                    {fruit.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-black capitalize">
                    {fruit.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-black">
                    {fruit.family}
                  </td>
                  <td className="px-4 py-3 text-sm text-black text-center">
                    {fruit.calories}
                  </td>
                  <td className="px-4 py-3 text-sm text-black text-center">
                    {fruit.sugar}
                  </td>
                  <td className="px-4 py-3 text-sm text-black text-center">
                    {fruit.carbohydrates}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => onEdit(fruit)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => onDelete(fruit)}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm"
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
