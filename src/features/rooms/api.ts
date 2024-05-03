import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Room } from './types'; // API yanıtları için türleri içe aktarın

// Temel URL'yi tanımlayın
const baseUrl = "https://localhost:7096/api";

// API modülünü oluşturun
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      // GET servisi tanımlayın
      
      getRoom: builder.query<Room[], void>({
        query: () => "Room",
      }),
      // POST servisi tanımlayın
      addRoom: builder.mutation<Room, Partial<Room>>({
        query: (newRoom) => ({
          url: "Room",
          method: "POST",
          body: newRoom,
        }),
      }),
      // PUT servisi tanımlayın
      updateRoom: builder.mutation<Room, { id: number; room: Partial<Room> }>(
        {
          query: ({ id, room }) => ({
            url: `Room/${id}`,
            method: "PUT",
            body: room,
          }),
        }
      ),
    }),
  });

// API modülünü dışa aktarın
export const { useGetRoomQuery, useAddRoomMutation, useUpdateRoomMutation } = api;
export default api;