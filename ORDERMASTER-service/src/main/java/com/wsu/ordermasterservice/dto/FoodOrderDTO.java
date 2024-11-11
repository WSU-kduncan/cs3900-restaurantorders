import lombok.Data;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.LocalTime;
package com.wsu.ordermasterservice.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
public class FoodOrderDTO {
    private Integer orderId;
    private Integer serverId;
    private Integer tableId;

    @NotBlank(message = "Date is required")
    private LocalDate date;

    @NotBlank(message = "Time ordered is required")
    private LocalTime timeOrdered;

    private LocalTime timeCompleted;

    @NotBlank(message = "Status is required")
    private String status;

    private String specialInstructions;
}
