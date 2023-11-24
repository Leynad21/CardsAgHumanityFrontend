import { useQuery } from "@tanstack/react-query";
import { getWhiteCards } from "../../services/apiWhiteCards";



export const useWhiteCards = () => {
    const {
        isLoading,
        data: whiteCards,
        error,
    } = useQuery({
        queryKey: ["whiteCards"],
        queryFn: getWhiteCards,
    });

    return { isLoading, error, whiteCards };
}