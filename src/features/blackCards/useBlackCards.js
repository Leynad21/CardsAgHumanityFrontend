import { useQuery } from "@tanstack/react-query";
import { getBlackCards } from "../../services/apiBlackCards";

export function useBlackCards() {
    const {
        isLoading,
        data: blackCards,
        error,
    } = useQuery({
        queryKey: ["blackCards"],
        queryFn: getBlackCards,
    });

    return { isLoading, error, blackCards };
}
