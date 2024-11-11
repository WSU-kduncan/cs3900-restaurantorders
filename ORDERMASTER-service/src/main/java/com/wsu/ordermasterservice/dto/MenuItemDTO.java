package com.wsu.ordermasterservice.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;
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
public class MenuItemDTO
{
    private Integer menuItemId;

    @Column(name = "item_name")
    @NotBlank(message = "The item's name is required")
    @Size(max = 16)
    private String itemName;

    @Column(name = "unit_price")
    @NotBlank(message = "The item's unit price is required")
    @Digits(fraction = 2, integer = 5)
    @PositiveOrZero
    private float unitPrice;
        
}