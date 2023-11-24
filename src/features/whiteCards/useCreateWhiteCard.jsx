import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createWhiteCard as createWhiteCardApi } from "../../services/apiWhiteCards";

export function useCreateWhiteCard() {
    const queryClient = useQueryClient();

    const { mutate: createWhiteCard, isLoading: isCreating } = useMutation({
        mutationFn: createWhiteCardApi,
        onSuccess: () => {
            toast.success("New card successfully created");
            queryClient.invalidateQueries({ queryKey: ["whiteCards"] });
        },
        onError: (err) => toast.error(err),
    });

    return { isCreating, createWhiteCard };
}
