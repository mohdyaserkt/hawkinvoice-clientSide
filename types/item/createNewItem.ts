interface handleCreateNewItem {
   item:{
    id?:string
  type:string
  name: string,
  unit: string,
  sellingPrice: Number
  description:string,}

  setError?: (field: string, errors: string[]) => void;
}

interface IItemData {
  id?:string
  type:string
  name: string,
  unit: string,
  sellingPrice: Number
  description:string,
}
