import {CustomerByPackage, QuatationParam} from '../models';
export abstract class ProductApi {
   
    abstract getQuotationProductList(quotationparam: QuatationParam): Promise<any>;
    abstract setCustomerByPackage(customerbypackage: CustomerByPackage): Promise<any>;
  }
  