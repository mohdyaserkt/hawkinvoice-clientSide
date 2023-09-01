interface handleCreateNewItem {
   item:{
  Type:String
  name: String,
  unit: String,
  sellingPrice: Number
  description:String,}

  setError?: (field: string, errors: string[]) => void;
}

interface IItemData {
  Type:String
  name: String,
  unit: String,
  sellingPrice: Number
  description:String,
}
