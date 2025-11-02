"use client";

import { AddForm, FruitFormValues } from "@/components/screen/form";
import { FruitTable } from "@/components/screen/table";
import { Fruit } from "@/data/fruits";
import { useFruits } from "@/hooks/useFruits";
import { useState } from "react";

export default function Home() {
  const { fruits, criarFruta, atualizarFruta, deletarFruta } = useFruits();
  const [formValues, setFormValues] = useState<FruitFormValues>({
    name: "",
    family: "",
    calories: undefined,
    sugar: undefined,
    carbohydrates: undefined,
  });
  const [emEdicao, setEmEdicao] = useState(false);

  const handleEdit = (fruit: Fruit) => {
    setFormValues({
      id: fruit.id,
      name: fruit.name,
      family: fruit.family,
      calories: fruit.calories,
      sugar: fruit.sugar,
      carbohydrates: fruit.carbohydrates,
    });
    setEmEdicao(true);
  };

  const handleDelete = (fruit: Fruit) => {
    if (window.confirm(`Tem certeza que deseja excluir ${fruit.name}?`)) {
      deletarFruta(fruit.id);
    }
  };

  const handleCancel = () => {
    setFormValues({ name: "", family: "" });
    setEmEdicao(false);
  };

  const handleSubmit = () => {
    if (emEdicao && formValues.id) {
      atualizarFruta(formValues.id, formValues);
    } else {
      criarFruta({
        name: formValues.name,
        family: formValues.family,
        calories: formValues.calories,
        sugar: formValues.sugar,
        carbohydrates: formValues.carbohydrates,
      });
    }
    handleCancel();
  };

  return (
    <main className="min-h-screen bg-stone-200 py-16 space-y-8">
      <div className="space-y-8">
        <AddForm
          values={formValues}
          onChange={setFormValues}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isEditing={emEdicao}
        />

        <FruitTable 
          frutas={fruits}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </main>
  );
}
