// import express from "express";
// const app = express();

// app.get("/", (req, res) => {
//   res.json({
//     message: "hello dude",
//   });
// });
// app.get("/categories/:category/products/:product", (req, res) => {
//   // const category = req.params.category;
//   // const product = req.params.product;

//   //--->better

//   const { category, product } = req.params;
//   res.json({
//     id: 243,
//     // category: category,
//     // product: product,

//     //----> better

//     category,
//     product,
//     content: {
//       name: product,
//       price: "2344", //rough data just for practice prps
//       description: `this product is in discount, Buy this ${product} now`,
//     },
//   });
// });

// app.listen(3000, () => {
//   console.log(`serving on PORT http://localhost:${3000}`);
// });
