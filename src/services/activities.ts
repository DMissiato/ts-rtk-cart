
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Activity } from '../types/ecommerce';


export const musementApi = createApi({
  reducerPath: 'musementApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sandbox.musement.com/api/v3' }),
  endpoints: (builder) => ({
    getActivities: builder.query<{data: Array<Activity>}, number>({
      query: (limit) => `activities?limit=${limit}&offset=0`,
    }),
    getActivityByName: builder.query<{data: Array<Activity>}, string>({
      query: (name) => `activities?text=${name}`,
    }),
  }),
})

export const { useGetActivitiesQuery, useGetActivityByNameQuery } = musementApi