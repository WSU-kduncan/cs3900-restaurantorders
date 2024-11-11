package com.wsu.ordermasterservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wsu.ordermasterservice.model.ResturantTable;

public interface ResturantTableRepository extends JpaRepository<ResturantTable, Integer> {

}
