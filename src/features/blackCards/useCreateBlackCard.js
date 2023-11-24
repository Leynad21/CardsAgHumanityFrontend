import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createBlackCard as createBlackCardApi } from "../../services/apiBlackCards";

export function useCreateBlackCard() {
    const queryClient = useQueryClient();

    const { mutate: createBlackCard, isLoading: isCreating } = useMutation({
        mutationFn: createBlackCardApi,
        onSuccess: () => {
            toast.success("New card successfully created");
            queryClient.invalidateQueries({ queryKey: ["blackCards"] });
        },
        onError: (err) => toast.error(err),
    });

    return { isCreating, createBlackCard };
}
