interface handleCreateNewOrganization {
  userId?: string;
  businessName: string;
  email?: string;
  typeOfbusiness: string;
  phoneNumber?: Number;
  NoOfemployes?: string;
  annualRevenue?: string;

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
  }