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

    // Benefits routes
    const benefitsRouter = require ('./benefits.routes');
    app.use("/", benefitsRouter); 
  }
  