import { NextResponse } from "next/server";
import { mapFruityViceToFruit, type FruityViceFruit } from "@/data/fruity-vice-api";

const EXTERNAL_API_URL = "https://www.fruityvice.com/api/fruit";

export async function GET() {
  try {
    const response = await fetch(`${EXTERNAL_API_URL}/all`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Erro ao buscar frutas na FruityVice" },
        { status: response.status },
      );
    }

    const data: FruityViceFruit[] = await response.json();
    const frutas = data.slice(0, 20).map(mapFruityViceToFruit);

    return NextResponse.json(frutas);
  } catch (error) {
    console.error("GET /api/fruits:", error);
    return NextResponse.json(
      { message: "Falha inesperada ao buscar frutas" },
      { status: 500 },
    );
  }
}