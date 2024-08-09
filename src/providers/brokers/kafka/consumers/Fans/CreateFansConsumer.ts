import {kafkaConsumer} from "../../kafka-consumer";
import {UseCase} from "../../../../../useCases/Fans/Create/UseCase";
import {Fan} from "../../../../../entities/Fan";
import {FansRepository} from "../../../../../repostitories/Fans/implementations/sqlite/FansRepository";

export class CreateFansConsumer {
    public useCase: UseCase;

    public constructor() {
        this.useCase = new UseCase(new FansRepository());
    }

    public async consumer() {
        const consumer = await kafkaConsumer("CREATE_FAN")
        await consumer.run({
            eachMessage: async ({message}) => {
                const messageToString = message.value?.toString()
                const fan = new Fan(JSON.parse(messageToString))
                await this.useCase.execute(fan);
            }
        })
    }
}