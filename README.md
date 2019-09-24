<h1 align="center">Welcome to stream-model 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://badgen.net/badgesize/normal/https://raw.githubusercontent.com/simplefeel/ducker-model/master/dist/ducker.es5.js">
</p>

> Data converter, decoupling front and rear development, improving development efficiency 数据转换器，解耦前后端开发，提升开发效率

## Motivation

✅ why we need ducker-model ? see the [article](https://mp.weixin.qq.com/s/q6xybux0fhrUz5HE5TY0aA)

## Install

[![NPM](https://nodei.co/npm/stream-model.png)](https://nodei.co/npm/stream-model/)

## Usage

```js
// 1.初始一个model实例，传入数据结构属性定义
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

// 2.实例调用parse()方法解析数据
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
// userState
{
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
}

// --------或者----------

// 3.实例调用traverse()方法反向映射数据

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
});
//origin
{
    "name": "张三",
    "price": 1000,
    "shopInfo": {
        "familiarItems": [
            {
                "itemId": "883487093",
                "itemName": "精致的星空耳环",
                "itemMainPic": "https://si.geilicdn.com/vshop1023602513-1477718242.jpg?w=984&h=984",
                "itemPrice": 17900,
                "itemOriginalPrice": 22500,
                "recommendReason": "48%的回头客都在买"
            }
        ]
    }
}
```

## API 说明

1. **type** 为**Date**的属性，增加 **format** 字段，支持多种内置数据格式

   - "l": "YYYY-MM-DD",
   - "ll": "YYYY 年 MM 月 DD 日",
   - "k": "YYYY-MM-DD hh:mm",
   - "kk": "YYYY 年 MM 月 DD 日 hh 点 mm 分",
   - "kkk": "YYYY 年 MM 月 DD 日 hh 点 mm 分 q",
   - "f": "YYYY-MM-DD hh:mm:ss",
   - "ff": "YYYY 年 MM 月 DD 日 hh 点 mm 分 ss 秒",
   - "fff": "YYYY 年 MM 月 DD 日 hh 点 mm 分 ss 秒 星期 w",
   - "n": "MM-DD",
   - "nn": "MM 月 DD 日",

2. 属性定义增加 **computed** ，值为函数，可以用来自定义格式化数据类型或者处理由多个路径传入的值得计算
3. **property**，值可以为一个数组，传入多个路径，此时可以通过定义 **computed** 方法来组合计算值

## Author

👤 **skinner**

- Github: [@simplefeel](https://github.com/simplefeel)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
