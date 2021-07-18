export enum PaymentFrequency {
    YEARLY = "YEARLY",
    HALFYEARLY = "HALFYEARLY",
    QUARTERLY  = "QUARTERLY ",
    MONTHLY = "MONTHLY",
  }
  export enum Gender {
    MALE = "MALE",
    FEMAlE = "FEMA​LE"
  }

  export enum PlanCode {
    T11A20 = "T11A20",
    T11A50 = "T11A50",
    T11AM1 = "T11AM1",
  }


  export enum Title {
    MR = "นาย",
    MRS = "นาง",
    MS = "นางสาว",
  }

export interface CustomerByPackage {
    gender:Gender;
    dob: string;
    planCode: PlanCode;
    premiumPerYear:number;
    paymentFrequency: PaymentFrequency;
    saPerYear:number;
    productId: string;
    productType: string;
    productFamily: string;
    baseSumAssured: number;
    baseAnnualPremium: number;
    productTerm: number;
    premiumPayingTerm: number;   
    title:Title;
    customerFristName:string;
    customerLastname:string;
    customerEmail:string;
    customerPhoneNumber:string;
  }

  export interface QuatationParam {
    gender:Gender;
    dob: string;
    planCode: PlanCode;
    premiumPerYear:number;
    paymentFrequency: PaymentFrequency;
    saPerYear:number;
  }


