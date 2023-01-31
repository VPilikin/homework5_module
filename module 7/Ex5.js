class SmallKitchenAppliance {
  constructor(productType, color, outputPower) {
    (this.voltage = 230),
      (this.location = "Kitchen"),
      (this.productType = productType),
      (this.color = color),
      (this.outputPower = outputPower);
  }
  getInfo = function () {
    console.log(`${this.productType} is ${this.color} color`);
  };
}

const electricKettle = new SmallKitchenAppliance(
  "Electric Kettle",
  "White",
  2000
);
const toaster = new SmallKitchenAppliance("Toaster", "Gray", 900);

electricKettle.getInfo();
toaster.getInfo();
console.log(electricKettle);
console.log(toaster);
