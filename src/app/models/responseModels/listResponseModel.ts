import { ResponseModel } from "./responseModel";

export interface ListResponseodel <T> extends ResponseModel{
    data:T[];
}

/*
Alt taraftaki kod yukarıdaki kodun tekil halidir. yani tek tek ResponseModel tanımlamak yerine yukarıdaki şekilde tanımlanabilir.

import { Car } from "../car";
import { ResponseModel } from "./responseModel";

export interface CarResponseModel extends ResponseModel{
    data:Car[]
}
*/