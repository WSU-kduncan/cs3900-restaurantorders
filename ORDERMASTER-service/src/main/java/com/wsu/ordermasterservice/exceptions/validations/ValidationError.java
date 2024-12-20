package com.wsu.ordermasterservice.exceptions.validations;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ValidationError {
    private String field;
    private Object rejectedValue;
    private String message;
    private String errorCode;
}