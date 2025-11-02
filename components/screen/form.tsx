"use client";

export type FruitFormValues = {
  id?: number;
  name: string;
  family: string;
  calories?: number;
  sugar?: number;
  carbohydrates?: number;
};

interface AddFormProps {
  readonly values: FruitFormValues;
  readonly onChange: (values: FruitFormValues) => void;
  readonly onSubmit: () => void;
  readonly onCancel: () => void;
  readonly isEditing?: boolean;
}

export function AddForm({
  values,
  onChange,
  onSubmit,
  onCancel,
  isEditing = false,
}: AddFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-black text-2xl font-bold mb-6">
        {isEditing ? 'Editar Fruta' : 'Adicionar Fruta'}
      </h2>

      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-black block text-sm font-medium label-control"
        >
          Nome da Fruta:
        </label>
        <input
          type="text"
          id="name"
          value={values.name}
          onChange={(e) => onChange({ ...values, name: e.target.value })}
          placeholder="Ex: Apple, Banana..."
          className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="family"
          className="block text-sm font-medium text-black"
        >
          Família:
        </label>
        <input
          type="text"
          id="family"
          value={values.family}
          onChange={(e) => onChange({ ...values, family: e.target.value })}
          placeholder="Ex: Rosaceae, Musaceae..."
          className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="calories"
          className="block text-sm font-medium text-black"
        >
          Calorias:
        </label>
        <input
          type="number"
          step={1}
          id="calories"
          value={values.calories ?? ''}
          onChange={(e) => onChange({ ...values, calories: e.target.value ? Number(e.target.value) : undefined })}
          placeholder="Ex: 52"
          className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="sugar"
          className="block text-sm font-medium text-black"
        >
          Açúcar:
        </label>
        <input
          type="number"
          step={0.5}
          id="sugar"
          value={values.sugar ?? ''}
          onChange={(e) => onChange({ ...values, sugar: e.target.value ? Number(e.target.value) : undefined })}
          placeholder="Ex: 10"
          className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="carbohydrates"
          className="block text-sm font-medium text-black"
        >
          Carboidratos:
        </label>
        <input
          type="number"
          step={0.5}
          id="carbohydrates"
          value={values.carbohydrates ?? ''}
          onChange={(e) => onChange({ ...values, carbohydrates: e.target.value ? Number(e.target.value) : undefined })}
          placeholder="Ex: 14"
          className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="flex-1 bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isEditing ? 'Atualizar' : 'Adicionar'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
