import { kafka } from "./index";

export const kafkaConsumer = async (topic: string) => {
    const consumer = kafka.consumer({ groupId: "ORDER_SITE"})
    consumer.connect();

    consumer.subscribe({ topic, fromBeginning: true })
    return consumer;
}