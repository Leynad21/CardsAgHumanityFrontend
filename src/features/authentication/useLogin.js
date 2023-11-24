import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login as loginApi } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";

export const useLogin = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: userData => loginApi(userData),
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user);
            navigate("/dashboard", { replace: true });
            toast.success("Login successful");
        },
        onError: (error) => {
            // toast.error(error.response.data.msg);
            toast.error("Provided email or password is incorrect");
        }
    })

    return { login, isLoading }
}