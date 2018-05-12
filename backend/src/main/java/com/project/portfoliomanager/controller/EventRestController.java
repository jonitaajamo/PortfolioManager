package com.project.portfoliomanager.controller;

import com.project.portfoliomanager.domain.Event;
import com.project.portfoliomanager.domain.EventRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping(value="/rest")
public class EventRestController {

    @Autowired
    private EventRepository repository;

    @GetMapping("/events")
    public @ResponseBody List<Event> getAllEvents() {
        return repository.findAll();
    }

    @PostMapping("/events")
    public Event createEvent(@Valid @RequestBody Event event) {
        return repository.save(event);
    }

    @RequestMapping(value="/rest/books/{id}", method = RequestMethod.GET)
    public @ResponseBody Event findAllEvents (@PathVariable("id") Long eventId) {
        return repository.findById(eventId);
    }

    @PutMapping("/notes/{id}")
    public Event updateEvent(@PathVariable(value="id") Long eventId, @Valid @RequestBody Event eventDetails) {
        Event event = repository.findById(eventId);

        event.setYear(eventDetails.getYear());
        event.setLength(eventDetails.getLength());
        event.setName(eventDetails.getName());
        event.setType(eventDetails.getType());
        event.setDescription(eventDetails.getDescription());
        event.setEnded(eventDetails.isEnded());

        Event updatedEvent = repository.save(event);

        return updatedEvent;
    }

    @DeleteMapping("/events/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable(value = "id") Long eventId) {
        Event event = repository.findById(eventId);

        repository.delete(event);

        return ResponseEntity.ok().build();
    }

}
