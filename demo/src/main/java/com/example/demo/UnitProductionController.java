package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

@Controller
public class UnitProductionController {

    private final SimpMessagingTemplate messagingTemplate;
    private int unitCount = 0;

    @Autowired
    public UnitProductionController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
        System.out.println("UnitProductionController bean created.");
    }

    @Scheduled(fixedRate = 5000, initialDelay = 5000)
    public void produceUnitPeriodically() {
        String unitName = "Unit " + (++unitCount);
        OutputMessage outputMessage = new OutputMessage("Server produced " + unitName);

     // Log the message being broadcast
        System.out.println("Broadcasting message: " + outputMessage.getContent());
        
        // Broadcast the message to all connected clients
        messagingTemplate.convertAndSend("/topic/units", outputMessage);
    }
}


