import { useQuery } from "@tanstack/react-query";
import { fetchChats } from "../../services/apiChat";


export const useChats = () => {
    const { isLoading, data: chats, error } = useQuery({
        queryKey: ["chats"],
        queryFn: fetchChats,
    })

    return { isLoading, chats, error }
}