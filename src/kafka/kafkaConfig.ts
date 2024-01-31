export const config = {
  kafkaBroker: "kafka:9092",
  producerConfig: {
    allowAutoTopicCreation: true,
  },
  consumerConfig: {
    groupId: "worker-group",
    allowAutoTopicCreation: true,
    retry: {
      initialRetryTime: 5000,
      retries: 10,
    },
  },
}
