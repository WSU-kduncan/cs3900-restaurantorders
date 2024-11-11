package com.wsu.ordermasterservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.wsu.ordermasterservice.dto.FoodOrderDTO;
import com.wsu.ordermasterservice.model.FoodOrder;
import com.wsu.ordermasterservice.repository.FoodOrderRepository;
import com.wsu.ordermasterservice.service.FoodOrderService;

@RestController
@RequestMapping("/api/food_orders")
@RequiredArgsConstructor
public class FoodOrderController {
    private final FoodOrderService foodOrderService;

    @GetMapping
    public ResponseEntity<?> getOrders(
        @RequestParam(required = false) String search,
        @RequestParam(defaultValue = "1") int page,
        @RequestParam(defaultValue = "10") int rpp,
        @RequestParam(required = false) String sortOrder,
        @RequestParam(required = false) String sortField) {

        Page<FoodOrder> orders = foodOrderService.getOrders(search, page, rpp, sortField, sortOrder);
        return ResponseEntity.ok().body(orders);
    }

    @PostMapping
    public ResponseEntity<FoodOrderDTO> addOrder(@RequestBody FoodOrderDTO foodOrderDTO) {
        FoodOrderDTO createdOrder = foodOrderService.addOrder(foodOrderDTO);
        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FoodOrderDTO> updateOrder(
        @PathVariable Integer id, @RequestBody FoodOrderDTO foodOrderDTO) {
        FoodOrderDTO updatedOrder = foodOrderService.updateOrder(id, foodOrderDTO);
        return ResponseEntity.ok(updatedOrder);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Integer id) {
        foodOrderService.deleteOrder(id);
        return ResponseEntity.ok().build();
    }
}
