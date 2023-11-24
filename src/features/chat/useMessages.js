import { getChatMessages } from "../../services/apiMessage"
import { useQuery } from "@tanstack/react-query"


export const useMessages = () => {
    const { data: messages, isLoading, error } = useQuery({
        queryKey: ["chatMessages"],
        queryFn: getChatMessages,
    })

    return { messages, isLoading, error }
}