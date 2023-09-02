interface handleCreateNewItem {
   item:{
    id?:string
  type:String
  name: String,
  unit: String,
  sellingPrice: Number
  description:String,}

  setError?: (field: string, errors: string[]) => void;
}

interface IItemData {
  id?:string
  type:String
  name: String,
  unit: String,
  sellingPrice: Number
  description:String,
}
