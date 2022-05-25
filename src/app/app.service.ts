import { Injectable } from "@angular/core";

export class Sale {
  id: number;

  region: string;

  country: string;

  city: string;

  amount: number;

  date: Date;
}
const sales: Sale[] = [
  {
    id: 1,
    region: "01 Ingreso",
    country: "",
    city: "Midazolam",
    amount: 100,
    date: "2022-05-24T04:00:00.000Z"
  },
  {
    id: 2,
    region: "01 Ingreso",
    country: "",
    city: "Midazolam",
    amount: 150,
    date: "2022-05-24T04:00:00.000Z"
  },
  {
    id: 3,
    region: "01 Ingreso",
    country: "",
    city: "Tinidazol",
    amount: 100,
    date: "2022-05-24T04:00:00.000Z"
  },
  {
    id: 4,
    region: "01 Ingreso",
    country: "",
    city: "Solucion Salina",
    amount: 125,
    date: "2022-05-24T04:00:00.000Z"
  },
  {
    id: 5,
    region: "01 Ingreso",
    country: "",
    city: "Metronizadol",
    amount: 200,
    date: "2022-05-24T04:00:00.000Z"
  },
  {
    id: 6,
    region: "01 Ingreso",
    country: "",
    city: "Amoxicilina",
    amount: 150,
    date: "2022-05-24T04:00:00.000Z"
  },
  {
    id: 6,
    region: "01 Ingreso",
    country: "",
    city: "Amoxicilina",
    amount: 150,
    date: "2022-05-24T06:00:00.000Z"
  },
  {
    id: 6,
    region: "01 Ingreso",
    country: "",
    city: "Amoxicilina",
    amount: 150,
    date: "2022-05-24T08:00:00.000Z"
  },
  {
    id: 7,
    region: "02 Egreso",
    country: "",
    city: "Sonda Vertical",
    amount: 2790,
    date: "2022-05-24T17:00:00.000Z"
  },
  {
    id: 7,
    region: "02 Egreso",
    country: "",
    city: "Sonda Vertical",
    amount: 100,
    date: "2022-05-24T04:15:00.000Z"
  }
];

@Injectable()
export class Service {
  getSales() {
    return sales;
  }
}
