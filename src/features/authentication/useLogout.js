import { logout as logoutApi } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();


    const { mutate: logout, isLoading } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            navigate('/', { replace: true });
            queryClient.removeQueries();
            toast.success('Logout successful');
        },
        onError: () => {
            toast.error('Logout failed');
        }

    })

    return { logout, isLoading }
}