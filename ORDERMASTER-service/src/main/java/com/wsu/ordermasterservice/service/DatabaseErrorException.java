package com.wsu.ordermasterservice.service;

public class DatabaseErrorException extends RuntimeException {

    public DatabaseErrorException(String message, Throwable e) {
        super(message, e);
    }

}