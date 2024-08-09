import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
    brokers: [process.env.KAFKA_BROKER],
    ssl: true,
    sasl: {
        mechanism: 'scram-sha-256',
        username: process.env.SASL_USERNAME,
        password: process.env.SASL_PASSWORD
    },
    logLevel: logLevel.ERROR,
});

export { kafka }