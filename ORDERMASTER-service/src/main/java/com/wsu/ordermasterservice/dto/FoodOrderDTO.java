package com.wsu.ordermasterservice.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

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
    private String date;

    @NotBlank(message = "Time ordered is required")
    private String timeOrdered;

    private String timeCompleted;

    @NotBlank(message = "Status is required")
    private String status;

}
