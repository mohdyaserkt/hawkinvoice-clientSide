interface handleCreateNewItem {
   item:{
  type:String
  name: String,
  unit: String,
  sellingPrice: Number
  description:String,}

  setError?: (field: string, errors: string[]) => void;
}

interface IItemData {
  type:String
  name: String,
  unit: String,
  sellingPrice: Number
  description:String,
}
