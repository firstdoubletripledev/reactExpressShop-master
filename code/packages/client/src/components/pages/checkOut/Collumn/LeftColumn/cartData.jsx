export const cartData ={
    UserId:"12313214",
    Date:"21/5/2018",
    Shipdate:"22/5/2019",
    Status:"1",
    Cart:{
        Items:[
            {
                Product: productA,
                Quanlity:3,
                Discount:30,
                Price: productA.price*Discount*Quanlity/100
            },
            {
                Product: productB,
                Quanlity:5,
                Discount:30,
                Price: productB.price*Discount*Quanlity/100
            },
    ],
    TotalQuanlity : Cart.Items.map(data)=>{
        
         tong += data.Quanlity;
        return tong;
    }

    }
}