import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Room } from "./types";

export interface RoomState {
  loading: boolean;
  roomList: Array<Room>;
  error: string | undefined;
}
const initialState: RoomState = {
  roomList: [],
  loading: false,
  error: undefined,
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    getRoomSuccess(state, action: PayloadAction<Room[]>) {
      state.loading = false;
      action.payload?.map((i) => {
        const value = {
          id: i.id,
          roomNo: i.room_no,
          numberOfBeds: i.number_of_beds,
          numberOfPeople: i.number_of_people,
          price: i.price,
          statusId: i.status_id,
          statusName: i.status_name,
          cleaningStatusId: i.cleaning_status_id,
          cleaningStatusName: i.cleaning_status_name,
        };
        state.roomList.push(value);
      });
    },
  },
  extraReducers: () => {},
});

export const { getRoomSuccess } = roomSlice.actions;
export const userSelector = (state: RootState) => state.roomsReducer;
export default roomSlice.reducer;
