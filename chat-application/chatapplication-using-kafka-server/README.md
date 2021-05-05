# Chat Application using Kafka Server

A learning based project made by following a step by step tutorial given by @Subhransu Maharana. Note that all copyrights are to the aforementioned person
and no code is written using the personal brain. This is solely for learning purpopses. Link for the tutorial is given below:

`https://dev.to/subhransu/realtime-chat-app-using-kafka-springboot-reactjs-and-websockets-lc`

A little demonstration of how the servers work is given as follows:

1. Download the latest version of Kafka Apache Server from their official site <a>https://kafka.apache.org/downloads</a>
2. Navigate to the downloaded directory.
3. Open 4 terminals.
4. In the 1st terminal, start the zookeeper using the command
`./bin/zookeeper-server-start.sh config/zookeeper.properties`
5. In the 2nd terminal, start the Kafka server using `./bin/kafka-server-start.sh config/server.properties`
6. In the 3rd terminal, create a Kafka topic and producer using `./bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic buffer` to send messages. Note that the last term `buffer` is the name  of teh topic you wish to create.
7. Finally. in the 4th terminal, create a consumer to receive messages using `./bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic buffer --from-beginning`

You should see your servers up and running. The rest is simply connection to springboot to read and receive these messages using this server.
