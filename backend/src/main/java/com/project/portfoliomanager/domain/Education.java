package com.project.portfoliomanager.domain;

public class Education extends Event {
    private boolean graduated;

    public Education(int year, int length, String name, String type, String description, boolean graduated) {
        super(year, length, name, type, description);
        this.graduated = graduated;
    }
}
