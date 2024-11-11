package com.wsu.ordermasterservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wsu.ordermasterservice.model.FoodOrder;

@Repository
public interface FoodOrderRepository extends JpaRepository<FoodOrder, Integer> {

}
