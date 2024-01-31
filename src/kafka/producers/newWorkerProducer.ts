import { Kafka } from "kafkajs"
import { config } from "../kafkaConfig"

const kafka = new Kafka({
  clientId: "worker-producer",
  brokers: [config.kafkaBroker],
})

const producer = kafka.producer(config.producerConfig)

export const produceWorkerCreated = async (workerData: any) => {
  await producer.connect()
  try {
    await producer.send({
      topic: "worker-created-topic",
      messages: [{ value: JSON.stringify(workerData) }],
    })
  } catch (error) {
    console.error("Error in producing new worker message", error)
  } finally {
    await producer.disconnect()
  }
}
