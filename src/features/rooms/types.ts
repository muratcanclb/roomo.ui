export interface Room {
    id: string;
    price: Float32Array;
    number_of_beds: Int16Array;
    number_of_people: Int16Array;
    status_id: Int16Array;
    cleaning_status_id: Int16Array;
    room_no: Int16Array;
    status_name: string;
    cleaning_status_name:string;
  }