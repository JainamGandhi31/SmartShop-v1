const app = require("./app");
const connectToDatabase =  require("./db/database")

// This will be triggered when there is any uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server, handling uncaught exception")
})

// config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path: "config/.env"
    });
}

// conecting to remote MongoDB database
connectToDatabase();

// server creation
const server = app.listen(process.env.PORT, ()=>{
})
console.log(`Server is running on http://localhost:${process.env.PORT}`)

// Unhandled promise rejection

process.on("unhandledRejection",(err)=>{
    console.log(`Shutting down the server for ${err.message}`);
    console.log("Shutting down the server for unhandled promise rejection");

    server.close(()=>{
        process.exit(1);
    });  
})