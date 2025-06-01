import { AxiosError } from "axios";
import { axios } from "../../../lib/axios";

export async function getFullStore(id: string) {
  try {
    const response = await axios.get(`/lojas/${id}/cardapio`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
}
