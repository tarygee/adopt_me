import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
   const results = useQuery(["breeds", animal], fetchBreedList);

    return [results?.data?.breeds ?? [], results.status]; //?? means if any of the mentioned fails, give me an empty array.
}