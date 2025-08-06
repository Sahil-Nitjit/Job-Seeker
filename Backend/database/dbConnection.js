import express from "express";
import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/";
export const dbConnection = () => {
    mongoose.connect(mongoURI, {
        dbName: "MERN_STACK_JOB_SEEKER",
    }).then(() => {
        console.log("MongoDB Connected Successfully!!");
    }).catch((error) => {
        console.log("ERROR: MongoDB not Connect", error);
    });
}