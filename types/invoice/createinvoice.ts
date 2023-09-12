interface Item {
    quantity: number;
    rate: number;
    itemName:string;
    [key: string]: string|number;
    // Add an index signature for dynamic keys
    
    
    
  }