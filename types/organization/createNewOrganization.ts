interface handleCreateNewOrganization {
  userId?: string;
  businessName: string;
  email?: string;
  typeOfbusiness: string;
  phoneNumber?: Number;
  NoOfemployes?: string;
  annualRevenue?: string;
  organizationAddress?:{
    address:string;
    apt: string;
    city: string;
    state: string;
    zipCode: Number;
  }

  setError: (field: string, errors: string[]) => void;
}


interface IOrganizationData{
  userId?: string;
  businessName: string;
  email?: string;
  typeOfbusiness: string;
  phoneNumber?: Number;
  NoOfemployes?: string;
  annualRevenue?: string;
  organizationAddress?:{
    address:string;
    apt: string;
    city: string;
    state: string;
    zipCode: Number;
  }
  }