const Model = require("../dist/ducker.es5");

let userModel = new Model({
  name: {
    type: String,
    property: "buyer.shopinfo.nickname"
  },
  price: {
    type: Number,
    unit: Model.Q
  },
  shopInfo: {
    familiarItems: [
      {
        itemId: String,
        itemName: String,
        itemMainPic: String,
        itemPrice: {
          type: Number,
          unit: Model.Q
        },
        itemOriginalPrice: Number,
        recommendReason: String
      }
    ]
  }
});

let userState = userModel.parse({
  uuid: 123,
  buyer: {
    shopinfo: {
      nickname: "张三"
    }
  },
  price: 1000,
  lastLoginTime: "1563897600000",
  shopInfo: {
    familiarItems: [
      {
        itemId: 883487093,
        itemName: "精致的星空耳环",
        itemMainPic: "https://si.geilicdn.com/vshop1023602513-1477718242.jpg?w=984&h=984",
        itemPrice: 17900,
        itemOriginalPrice: 22500,
        recommendReason: "48%的回头客都在买"
      }
    ]
  }
});

let origin = userModel.dispose({
  "name": "张三",
  "uuid": 123,
  "buyer": {
    "shopinfo": {
      "nickname": "张三"
    }
  },
  "price": 1,
  "lastLoginTime": "1563897600000",
  "shopInfo": {
    "familiarItems": [
      {
        "itemId": "883487093",
        "itemName": "精致的星空耳环",
        "itemMainPic": "https://si.geilicdn.com/vshop1023602513-1477718242.jpg?w=984&h=984",
        "itemPrice": 17.9,
        "itemOriginalPrice": 22500,
        "recommendReason": "48%的回头客都在买"
      }
    ]
  }
})

// let userParams = userModel.traverse({id: 234, name: "李四", age: null,
// lastLoginTime: "2019-07-24", price: 24});

console.log(JSON.stringify(userState)); //{"uuid":234,"buyer":{"shopinfo":{"nickname":"李四"}},"lastLoginTime":1563897600000,"price":2400}