module.exports = app => {
  
    // Base routes
    const indexRouter = require("./index.routes");
    app.use("/", indexRouter);
    
    // Auth routes
    const authRouter = require("./auth.routes");
    app.use("/", authRouter); 
  
    // Cafeterias routes
    const cafeteriasRouter = require ('./cafeterias.routes');
    app.use("/", cafeteriasRouter); 

    // Shop routes
    const shopRouter = require ('./shop.routes');
    app.use("/", shopRouter); 

    // About Coffee routes
    const aboutCoffeeRouter = require ('./about-coffee.routes');
    app.use("/", aboutCoffeeRouter);

    // Benefits routes
    const benefitsRouter = require ('./benefits.routes');
    app.use("/", benefitsRouter); 
  }
  