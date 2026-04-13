import { baseApi } from '../baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 🔐 LOGIN
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Auth'],
    }),

    // 👤 ADD ROLE
    addRole: builder.mutation({
      query: (data) => ({
        url: '/auth/add-role',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Auth'],
    }),

    // 👤 GET ME
    getMe: builder.query({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
      providesTags: ['Auth'],
    }),
  }),
});
export const { useGetMeQuery, useLoginMutation, useAddRoleMutation } = authApi;
