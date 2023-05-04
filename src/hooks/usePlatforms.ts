import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import Platform from "../entities/Platform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.getAll({}),
    staleTime: 7 * 24 * 60 * 60 * 1000, // 1W\
    initialData: platforms
})

export default usePlatforms