package com.wsu.ordermasterservice.exceptions;

public class DatabaseErrorException extends RuntimeException {

    public DatabaseErrorException(String message, Throwable e) {
        super(message, e);
    }

}