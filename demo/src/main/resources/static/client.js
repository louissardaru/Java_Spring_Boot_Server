console.log('Client.js is executing');

var stompClient = null;
var clientId; // Add a variable to store the client ID

function connect(clientIdParam) {
    clientId = clientIdParam; // Set the client ID
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);

        // Subscribe to the /topic/units channel
        var subscription = stompClient.subscribe('/topic/units', function (outputMessage) {
            console.log('Received message:', outputMessage);

            showOutput(JSON.parse(outputMessage.body).content);
        });

        console.log('Subscription:', subscription);
    });
}

function showOutput(message) {
    // Display the message in the client UI
    var outputElement = document.getElementById('output' + clientId);

    if (outputElement) {
        // Append the new message to the existing content
        outputElement.innerHTML += '<p>' + message + '</p>';
    } else {
        console.error('Output element not found for client ' + clientId);
    }
}

// Call connect when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Call connect with the appropriate client ID ('1' for Client 1, '2' for Client 2)
    connect('1'); // Change the client ID based on the HTML page
});
