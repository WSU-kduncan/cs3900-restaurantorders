package com.wsu.ordermasterservice.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FoodOrderDTO {
    private Integer orderId;
    private Integer serverId;
    private Integer tableId;

    @NotNull(message = "Date is required")
    private Date date;

    @NotNull(message = "Time ordered is required")
    @JsonFormat(pattern="HH:mm:ss")
    private Date timeOrdered;

    @JsonFormat(pattern="HH:mm:ss")
    private Date timeCompleted;

    @NotBlank(message = "Status is required")
    private String status;

    private String specialInstructions;

}
