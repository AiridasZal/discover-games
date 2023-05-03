import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.getAll({}),
    staleTime: 7 * 24 * 60 * 60 * 1000, // 1W\
    initialData: platforms
})

export default usePlatforms