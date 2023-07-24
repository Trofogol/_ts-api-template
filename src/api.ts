// this code was partly generated by chatgpt 3.5, then separated into two files

import express, { Request, Response } from "express";
import * as threads from "./sample-threads";

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// GET request handler
app.get("/", async (_, res: Response) => {
  console.log(`====\nReceived GET request.`);
  // run all three threads
  const batchRunner = threads.batch12();
  const thread3Runner = threads.thread3();
  console.log(`Threads are started`);

  // wait for completion to get results
  const threadPack = await batchRunner;
  const thread3 = await thread3Runner;
  // unpack batch
  const thread1 = threadPack.first;
  const thread2 = threadPack.second;

  res.json({ thread1, thread2, thread3 });
});

// POST request handler
app.post("/", (req: Request, res: Response) => {
  console.log("====\nReceived POST request:");
  console.log(req.body);
  res.send("received POST request");
});

// PUT request handler
app.put("/", (req: Request, res: Response) => {
  console.log("====\nReceived PUT request:");
  console.log(req.body);
  res.send("received PUT request");
});

// DELETE request handler
app.delete("/", (req: Request, res: Response) => {
  console.log("====\nReceived DELETE request:");
  console.log(req.body);
  res.send("received DELETE request");
});

// Start the server
app.listen(port, () => {
  console.log(`====\nServer is listening on port ${port}\n====\n====\n`);
});
