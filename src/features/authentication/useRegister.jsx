import { useMutation, useQueryClient } from "@tanstack/react-query"
import { register as registerApi } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";

export const useRegister = () => {
    const navigate = useNavigate();

    const { mutate: register, isLoading } = useMutation({
        mutationFn: userData => registerApi(userData),
        onSuccess: (user) => {
            navigate("/login", { replace: true });
            toast.success("You have successfully registered");
        },
        onError: (error) => {
            toast.error("Your registration failed" + "\n" + error.response.data.message);
            console.log(error);
        }
    })

    return { register, isLoading }
}