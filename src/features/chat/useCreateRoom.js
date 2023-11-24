import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createRoom as createRoomApi } from "../../services/apiChat";


export const useCreateRoom = () => {

    const queryClient = useQueryClient()

    const { mutate: createRoom, isLoading: isCreating } = useMutation({
        mutationFn: createRoomApi,
        onSuccess: () => {
            toast.success("Room created successfully")
            queryClient.invalidateQueries({ queryKey: ["chats"] })
        },
        onError: (err) => toast.error(err)
    })

    return { createRoom, isCreating }
}

