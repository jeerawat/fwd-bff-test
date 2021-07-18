import {GET,POST,  Path, FormParam, Errors, QueryParam, PathParam} from 'typescript-rest';
import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import {Inject} from 'typescript-ioc';
import {ProductApi} from '../services';
import {LoggerApi} from '../logger';
import { CustomerByPackage,QuatationParam } from 'src/models';

@Path('/product')
export class ProductController {

  @Inject
  service: ProductApi;
  @Inject
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child('ProductController');
  }

  @Path('/getProduct')
  @POST
  async getProduct(@Body() data: QuatationParam ): Promise<any> {
    this.logger.info('Get Quotation Product List');
  
    return this.service.getQuotationProductList(data);
   
  }

  @Path('/setCustomerByPackage')
  @POST
  async setCustomerByPackage(@Body() data: CustomerByPackage ): Promise<any> {
    this.logger.info('Set Customer By Package');
  
    return this.service.setCustomerByPackage(data);
   
  }


  
}
