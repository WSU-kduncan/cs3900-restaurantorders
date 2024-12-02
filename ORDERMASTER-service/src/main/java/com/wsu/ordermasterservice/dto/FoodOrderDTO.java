package com.wsu.ordermasterservice.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

import jakarta.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FoodOrderDTO {
    private Integer orderId;
    private Integer serverId;
    private Integer tableId;

    @NotBlank(message = "Date is required")
    private Date date;

    @NotBlank(message = "Time ordered is required")
    private Date timeOrdered;

    private Date timeCompleted;

    @NotBlank(message = "Status is required")
    private String status;

    private String specialInstructions;

}