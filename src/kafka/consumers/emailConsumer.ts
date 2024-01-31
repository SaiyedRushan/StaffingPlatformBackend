// src/kafka/consumers/emailConsumer.ts
import { Kafka } from "kafkajs"
import { config } from "../kafkaConfig"
import { sendEmail } from "../../services/emailService"

const kafka = new Kafka({
  clientId: "email-consumer",
  brokers: [config.kafkaBroker],
})

const consumer = kafka.consumer(config.consumerConfig)

const consumeEmailMessages = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: "worker-created-topic", fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const worker = JSON.parse(message?.value?.toString() ?? "")
      console.log(`Received worker: ${worker}`)
      sendEmail(worker.email, "Worker Created", `Worker ${worker.name} has been created`)
    },
  })
}

export const startEmailConsumer = () => {
  consumeEmailMessages()
    .then(() => {
      console.log("Email consumer started")
    })
    .catch((error) => {
      console.error("Error in email consumer:", error)
    })
}
