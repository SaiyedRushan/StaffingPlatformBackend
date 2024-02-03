import { createClient, RedisClientType } from "redis"

const client: RedisClientType = createClient({ url: "redis://redis:6379" })
client.connect()

client.on("error", (err) => console.log("Redis Client Error", err))
client.on("connect", () => console.log("Redis Client Connected"))

export default client
