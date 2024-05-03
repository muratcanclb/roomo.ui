import {
  MeetingRoom,
  CleaningServices,
  DryCleaning,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import "./roomsPage.css";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getRoomSuccess } from "../../features/rooms/roomsSlice";
import { useGetRoomQuery } from "../../features/rooms/api";

export default function roomsPage() {
  const { data, error, isLoading } = useGetRoomQuery();
  const roomListData = useAppSelector((state) => state.roomsReducer.roomList);
  const roomArray = [
    {
      id: "3692a3c6-0493-4a86-a51a-6b976a751721",
      price: "1.500 TL",
      number_of_beds: 1,
      number_of_people: 1,
      status_id: 1,
      cleaning_status_id: 1,
      room_no: 1,
      status_name: "Boş",
      cleaning_status_name: "Temiz",
    },
    {
      id: "6e0fe7d3-e75f-4ea4-be3e-d030ff6e9097",
      price: "1.500 TL",
      number_of_beds: 1,
      number_of_people: 1,
      status_id: 1,
      cleaning_status_id: 1,
      room_no: 2,
      status_name: "Boş",
      cleaning_status_name: "Temiz",
    },
    {
      id: "73ff98be-46bb-4313-ba99-c4c5e254d011",
      price: "1.800 TL",
      number_of_beds: 2,
      number_of_people: 2,
      status_id: 1,
      cleaning_status_id: 1,
      room_no: 3,
      status_name: "Boş",
      cleaning_status_name: "Temiz",
    },
    {
      id: "a7c38381-6b1e-4d1e-8191-330ea7f65020",
      price: "1.500 TL",
      number_of_beds: 1,
      number_of_people: 1,
      status_id: 1,
      cleaning_status_id: 1,
      room_no: 4,
      status_name: "Boş",
      cleaning_status_name: "Temiz",
    },
    {
      id: "f4ae1905-e038-480e-a61f-fd22b16e2355",
      price: "1.800 TL",
      number_of_beds: 2,
      number_of_people: 2,
      status_id: 2,
      cleaning_status_id: 1,
      room_no: 5,
      status_name: "Rezerve",
      cleaning_status_name: "Temiz",
    },
    {
      id: "61ed6f25-871a-4658-8a23-3855ba5ce415",
      price: "2.900 TL",
      number_of_beds: 2,
      number_of_people: 2,
      status_id: 3,
      cleaning_status_id: 1,
      room_no: 6,
      status_name: "Dolu",
      cleaning_status_name: "Temiz",
    },
  ];
  console.log(roomListData, "rroommsss");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRoomSuccess(data));
  }, [data, error, dispatch]);
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(roomArray).map((value, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ display: "flex" }} className="cardSettings">
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Oda No: {value.room_no}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Yatak Sayısı: {value.number_of_beds}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Kişi Sayısı: {value.number_of_people}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Fiyat:{value.price}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  {(() => {
                    if (value.cleaning_status_id == 1) {
                      return (
                        <div>
                          <IconButton color="success">
                            <CleaningServices />
                          </IconButton>
                        </div>
                      );
                    } else if (value.cleaning_status_id == 2) {
                      return (
                        <div>
                          <IconButton color="warning">
                            <CleaningServices />
                          </IconButton>
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          <IconButton color="error">
                            <CleaningServices />
                          </IconButton>
                        </div>
                      );
                    }
                  })()}
                  {(() => {
                    if (value.status_id == 1) {
                      return (
                        <div>
                          <IconButton color="success">
                            <DryCleaning />
                          </IconButton>
                        </div>
                      );
                    } else if (value.status_id == 2) {
                      return (
                        <div>
                          <IconButton color="error">
                            <DryCleaning />
                          </IconButton>
                        </div>
                      );
                    } else {
                      return (
                        <div>
                          <IconButton color="error">
                            <DryCleaning />
                          </IconButton>
                        </div>
                      );
                    }
                  })()}
                </Box>
              </Box>
              <div className="roomIcon">
                {(() => {
                  if (value.cleaning_status_id == 1 && value.status_id == 1) {
                    return (
                      <div>
                        <IconButton color="success">
                          <MeetingRoom sx={{ height: 50, width: 50 }} />
                        </IconButton>
                      </div>
                    );
                  } else if (value.cleaning_status_id == 2) {
                    return (
                      <div>
                        <IconButton color="warning">
                          <MeetingRoom sx={{ height: 50, width: 50 }} />
                        </IconButton>
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <IconButton color="warning">
                          <MeetingRoom sx={{ height: 50, width: 50 }} />
                        </IconButton>
                      </div>
                    );
                  }
                })()}
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
