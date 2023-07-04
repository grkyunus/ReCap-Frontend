export interface Rental{
    id:number;
    carId:number;
    brandName:string;
    fullName:string;
    rentDate: string;
    returnDate:string | null ;
}