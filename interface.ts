interface HospitalItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
  interface HospitalJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HospitalItem[]
  }

  export interface BookingItem {
    _id: string,
    apptDate: string,
    user: string,
    hotel: string,
    createdAt: string,
    __v: number,
  }

  export interface CartItem {
    checkInDate: string,
    checkOutDate: string,
    hid: string,
    name: string,
    price: number,
    picture: string
  }