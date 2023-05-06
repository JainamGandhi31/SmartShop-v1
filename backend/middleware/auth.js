const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../model/user"); 
const Shop = require("../model/shop");



// Checking roles whether the user is seller or customer

// for user authentication purpose for different routes
// exporting isAuthenticated function
exports.isAuthenticated = catchAsyncErrors(async(req,res,next) => {
    const {token} = req.cookies; // extracting toke from cookies

    // if no token is generated
    if(!token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    // decoding user object from token using JWT_SECRET_KEY
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);

    next();
});

// for seller authentication purpose for different routes
exports.isSeller = catchAsyncErrors(async(req,res,next) => {
    const {seller_token} = req.cookies;
    if(!seller_token){
        return next(new ErrorHandler("Please login to continue", 401));
    }

    const decoded = jwt.verify(seller_token, process.env.JWT_SECRET_KEY);

    req.seller = await Shop.findById(decoded.id);

    next();
});

exports.isAdmin = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`${req.user.role} can not access this resources!`))
        };
        next();
    }
}