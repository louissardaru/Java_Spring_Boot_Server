# Java_Spring_Boot_Server
Server that communicates with multiple client applications. Server is in Java with Spring Boot and the clients are written in (JavaScript, HTML).

1.	Task Objectives
Create a server that communicates with multiple client applications. Server should be in Java with Spring Boot and the clients can be written in any language of your choice (e.g. JavaScript, HTML, C++). The clients and server must be able to exchange JSON messages using WebSockets.

2.	Implementation Steps

  2.1.	The server should periodically (in periods of 5 to 10 seconds) broadcast messages for producing Units.

  2.2.	The clients should be listening for broadcasted messages.

  2.3.	Communication between the applications should print:

           Server                  Client 1                        Client 2
     “Unit 1” produced      Server produced “Unit 1”	     Server produced “Unit 1”
     .................      ........................      ........................
     “Unit n” produced      Server produced “Unit n”	     Server produced “Unit n”

  2.4. Design your solution so that you can scale quick. In case a new request comes for an additional Client to be implemented – the implementation to happen as quick as possible.

  2.5. Add a security layer of your choice to the application.
