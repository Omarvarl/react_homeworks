import { Task } from 'entities/task';
import { baseApi } from 'shared/api';

const tasksApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getTasks: build.query<Task[], void>({
            query: () => 'todos',
            transformResponse: ({ todos }) => todos,
        }),
    }),
});

export const { useGetTasksQuery } = tasksApi;
