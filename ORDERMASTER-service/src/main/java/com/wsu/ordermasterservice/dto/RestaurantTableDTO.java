package com.wsu.ordermasterservice.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
    @Size(max = 11)
    private String capacity;

}
