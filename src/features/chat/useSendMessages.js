import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendMessage as sendMessageApi } from "../../services/apiMessage";


export const useSendMessage = () => {

    const queryClient = useQueryClient()

    const { mutate: sendMessage, isLoading: isSending } = useMutation({
        mutationFn: sendMessageApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["chatMessages"] })
        },
        onError: (err) => console.log(err),
    })

    return { sendMessage, isSending }
}