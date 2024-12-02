package com.wsu.ordermasterservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wsu.ordermasterservice.dto.RestaurantTableDTO;
import com.wsu.ordermasterservice.service.RestaurantTableService;

import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/restauranttables")
public class RestaurantTableController {

    private final RestaurantTableService restaurantTableService;

    @GetMapping
    public ResponseEntity<List<RestaurantTableDTO>> getAllRestaurantTables() {
        return ResponseEntity.ok(restaurantTableService.getAllRestaurantTables());
    }
    //http://localhost:8080/ordermaster-service/restauranttables/1
    //http://localhost:8080/ordermaster-service/restauranttables
    
    @GetMapping("/{tableId}")
    public ResponseEntity<RestaurantTableDTO> getrestaurantTableById(@PathVariable Integer tableId) {
        return ResponseEntity.ok(restaurantTableService.getRestaurantTableById(tableId));
    }

    @PostMapping
    public ResponseEntity<RestaurantTableDTO> createrestaurantTable(@RequestBody RestaurantTableDTO restaurantTableDTO) {
        return ResponseEntity.ok(restaurantTableService.createRestaurantTable(restaurantTableDTO));
    }

    @PutMapping("/{tableId}")
    public ResponseEntity<RestaurantTableDTO> updaterestaurantTable(@PathVariable Integer tableId, @RequestBody RestaurantTableDTO restaurantTableDTO) {
        return ResponseEntity.ok(restaurantTableService.updateRestaurantTable(tableId, restaurantTableDTO));
    }

    @DeleteMapping("/{tableId}")
    public ResponseEntity<Void> deleteRestaurantTable(@PathVariable Integer tableId) {
        restaurantTableService.deleteRestaurantTable(tableId);
        return ResponseEntity.noContent().build();
    }
}
