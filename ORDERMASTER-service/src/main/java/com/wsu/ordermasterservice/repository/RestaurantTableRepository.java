package com.wsu.ordermasterservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wsu.ordermasterservice.model.RestaurantTable;

public interface RestaurantTableRepository extends JpaRepository<RestaurantTable, Integer> {

}
