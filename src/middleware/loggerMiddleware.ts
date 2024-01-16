import { NextFunction, Request, Response } from "express"

export default function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  // Log the API endpoint hit
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
  next()
}
