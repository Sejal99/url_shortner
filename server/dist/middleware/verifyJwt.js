"use strict";
// import { Request, Response, NextFunction } from 'express'
// import jwt, { VerifyErrors } from 'jsonwebtoken'
// export const vertifyJwt= async(req:Request ,res:Response, next:NextFunction)=> {
//     try{
//         const token = req.headers.authorization;
//         if(!token){
//             return res.send('Token is not valid/ No token')
//         }
//         if(!process.env.SECRET_KEY){
//             return res.sendStatus(403)
//         }
//         jwt.verify(token, process.env.SECRET_KEY, (err:VerifyErrors|null , payload:any)=> {
//             if(err){
//                 return res.status(400).json(err)
//             }
//             if(!payload){
//                 return res.sendStatus(403)
//             }
//             if(typeof payload === "string"){
//                 return res.sendStatus(403)
//             }
//             req.headers["userId"]= payload.id
//             req.headers["role"]=payload.role
//             next()
//          })
//     }catch(err){
//         res.status(403).json(err)
//     }
// }
