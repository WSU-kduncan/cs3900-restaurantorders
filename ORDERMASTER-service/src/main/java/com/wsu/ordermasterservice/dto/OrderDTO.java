package com.wsu.ordermasterservice.dto;


@Data
public class OrderDetailDTO {

    @NotNull(message = "Order ID is required")
    private Long orderId;

    @NotNull(message = "Menu Item ID is required")
    private Long menuItemId;

    @NotNull(message = "Quantity is required")
    private Integer quantity;

    @NotNull(message = "Price is required")
    private Double price;

    // Add additional fields and validation as necessary.
}
