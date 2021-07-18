import {ProductApi} from './product.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';
import axios from 'axios';
import { CustomerByPackage, QuatationParam } from 'src/models';
import { Produces } from 'typescript-rest-swagger';
import { ProductController } from 'src/controllers';
import { isEmpty, isEnum, IsNotEmpty, IsUUID, ValidateNested, isDate } from 'class-validator';




export class ProductService implements ProductApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('ProductService');
  }

  
  async getQuotationProductList(quotationparam: QuatationParam) : Promise<any> {
    this.logger.info(`Generating greeting for `);

     enum PaymentFrequency {
      YEARLY = "YEARLY",
      HALFYEARLY = "HALFYEARLY",
      QUARTERLY  = "QUARTERLY ",
      MONTHLY = "MONTHLY",
    }
     enum Gender {
      MALE = "MALE",
      FEMAlE = "FEMA​LE"
    }
  
     enum PlanCode {
      T11A20 = "T11A20",
      T11A50 = "T11A50",
      T11AM1 = "T11AM1",
    }

   if (isEmpty(quotationparam.gender)){
    return {
      error:"Gender Not Empty!!"
    };
   }
   
  
   
  
   if (Object.values(Gender).includes(quotationparam.gender) == false) {
    return {
      error:"Gender No List!!"
      };
    }


   if (isEmpty(quotationparam.dob)){
    return {
      error:"Date Of Birth Not Empty!!"
    };
   }

   if (quotationparam.dob.length < 10){
    return {
      error:"Date Of Birth is wrong format!!"
    };
   }

   let timestamp=Date.parse(quotationparam.dob)

   if (isNaN(timestamp)==true)
   {
       var d=new Date(timestamp);
       return {
         error:"Date Of Birthday is wrong format!!!"
       };
   }


   if (isEmpty(quotationparam.planCode)){
    return {
      error:"Plan Code Not Empty!!"
    };
   }


   if (!Object.values(PlanCode).includes(quotationparam.planCode)) {
    return {
      error:"Plan Code No List!!"
      };
    }

   


   if (isEmpty(quotationparam.paymentFrequency)){
    return {
      error:"Payment Frequency Not Empty!!"
    };
   }

   if (!Object.values(PaymentFrequency).includes(quotationparam.paymentFrequency)) {
    return {
      error:"Payment Frequency No List!!"
      };
    }



    if (isEmpty(quotationparam.premiumPerYear) && isEmpty(quotationparam.saPerYear)){
      return {
        error:"Please Input amount premium Per Year OR SA Per Year"
      };
     }

   if (!isEmpty(quotationparam.premiumPerYear) && !isEmpty(quotationparam.saPerYear)){
    return {
      error:"Please Input amount Only one Between premium Per Year OR SA Per Year"
    };
   }



  

  

if (!isEmpty(quotationparam.premiumPerYear)) {
  const res = await axios.post('https://api.fwd.co.th/dev-ecommerce/getProduct',
     {
      genderCd: quotationparam.gender,
      dob: quotationparam.dob,
      planCode: quotationparam.planCode,
      premiumPerYear : Number(quotationparam.premiumPerYear),
      paymentFrequency: quotationparam.paymentFrequency
    });
   
    return res.data.quotationProductList;
}else{
  const res = await axios.post('https://api.fwd.co.th/dev-ecommerce/getProduct',
     {
      genderCd: quotationparam.gender,
      dob: quotationparam.dob,
      planCode: quotationparam.planCode,
      saPerYear : Number(quotationparam.saPerYear),
      paymentFrequency: quotationparam.paymentFrequency
    });

    return res.data.quotationProductList;
}




   
  }



  async setCustomerByPackage(customerbypackage: CustomerByPackage) : Promise<any> {
    this.logger.info(`Generating greeting for `);

     enum PaymentFrequency {
      YEARLY = "YEARLY",
      HALFYEARLY = "HALFYEARLY",
      QUARTERLY  = "QUARTERLY ",
      MONTHLY = "MONTHLY",
    }
     enum Gender {
      MALE = "MALE",
      FEMAlE = "FEMA​LE"
    }
  
     enum PlanCode {
      T11A20 = "T11A20",
      T11A50 = "T11A50",
      T11AM1 = "T11AM1",
    }

   if (isEmpty(customerbypackage.gender)){
    return {
      error:"Gender Not Empty!!"
    };
   }
   
  
   
  
   if (Object.values(Gender).includes(customerbypackage.gender) == false) {
    return {
      error:"Gender No List!!"
      };
    }


   if (isEmpty(customerbypackage.dob)){
    return {
      error:"Date Of Birth Not Empty!!"
    };
   }

   if (customerbypackage.dob.length < 10){
    return {
      error:"Date Of Birth is wrong format!!"
    };
   }

   let timestamp=Date.parse(customerbypackage.dob)

   if (isNaN(timestamp)==true)
   {
       var d=new Date(timestamp);
       return {
         error:"Date Of Birthday is wrong format!!!"
       };
   }


   if (isEmpty(customerbypackage.planCode)){
    return {
      error:"Plan Code Not Empty!!"
    };
   }


   if (!Object.values(PlanCode).includes(customerbypackage.planCode)) {
    return {
      error:"Plan Code No List!!"
      };
    }

   


   if (isEmpty(customerbypackage.paymentFrequency)){
    return {
      error:"Payment Frequency Not Empty!!"
    };
   }

   if (!Object.values(PaymentFrequency).includes(customerbypackage.paymentFrequency)) {
    return {
      error:"Payment Frequency No List!!"
      };
    }



    if (isEmpty(customerbypackage.premiumPerYear) && isEmpty(customerbypackage.saPerYear)){
      return {
        error:"Please Input amount premium Per Year OR SA Per Year"
      };
     }

   if (!isEmpty(customerbypackage.premiumPerYear) && !isEmpty(customerbypackage.saPerYear)){
    return {
      error:"Please Input amount Only one Between premium Per Year OR SA Per Year"
    };
   }



  
   if (isEmpty(customerbypackage.title)){
    return {
      error:"Title Not Empty!!"
    };
   }


   if (isEmpty(customerbypackage.customerFristName)){
    return {
      error:"First Name Not Empty!!"
    };
   }


   if (isEmpty(customerbypackage.customerLastname)){
    return {
      error:"Last Name Not Empty!!"
    };
   }


   if (isEmpty(customerbypackage.customerEmail)){
    return {
      error:"Email Not Empty!!"
    };
   }


   if (isEmpty(customerbypackage.customerPhoneNumber)){
    return {
      error:"Phone Number Not Empty!!"
    };
   }
  

if (!isEmpty(customerbypackage.premiumPerYear)) {
  const res = await axios.post('https://api.fwd.co.th/dev-ecommerce/getProduct',
     {
      genderCd: customerbypackage.gender,
      dob: customerbypackage.dob,
      planCode: customerbypackage.planCode,
      premiumPerYear : Number(customerbypackage.premiumPerYear),
      paymentFrequency: customerbypackage.paymentFrequency
    });

    customerbypackage.productId = res.data.quotationProductList[0].productId;
    customerbypackage.productType = res.data.quotationProductList[0].productTypeCd;
    customerbypackage.productFamily = res.data.quotationProductList[0].productFamilyCd;
    customerbypackage.baseSumAssured = res.data.quotationProductList[0].baseSumAssured;
    customerbypackage.baseAnnualPremium = res.data.quotationProductList[0].baseAnnualPremium;

    customerbypackage.productTerm = res.data.quotationProductList[0].productTerm;
    customerbypackage.premiumPayingTerm = res.data.quotationProductList[0].premiumPayingTerm;
   
  //  return res.data.quotationProductList;
}else{
  const res = await axios.post('https://api.fwd.co.th/dev-ecommerce/getProduct',
     {
      genderCd: customerbypackage.gender,
      dob: customerbypackage.dob,
      planCode: customerbypackage.planCode,
      saPerYear : Number(customerbypackage.saPerYear),
      paymentFrequency: customerbypackage.paymentFrequency
    });

    

    customerbypackage.productId = res.data.quotationProductList[0].productId;
    customerbypackage.productType = res.data.quotationProductList[0].productTypeCd;
    customerbypackage.productFamily = res.data.quotationProductList[0].productFamilyCd;
    customerbypackage.baseSumAssured = res.data.quotationProductList[0].baseSumAssured;
    customerbypackage.baseAnnualPremium = res.data.quotationProductList[0].baseAnnualPremium;

    customerbypackage.productTerm = res.data.quotationProductList[0].productTerm;
    customerbypackage.premiumPayingTerm = res.data.quotationProductList[0].premiumPayingTerm;
  //  return res.data.quotationProductList;
}


return customerbypackage;

   
  }

}
