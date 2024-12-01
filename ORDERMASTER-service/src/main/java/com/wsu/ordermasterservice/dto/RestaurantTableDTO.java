package com.wsu.ordermasterservice.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RestaurantTableDTO {

    private Integer tableId;

    @NotBlank(message = "Capacity is required")
    @Max(value = 11)
    private Integer capacity;

}
