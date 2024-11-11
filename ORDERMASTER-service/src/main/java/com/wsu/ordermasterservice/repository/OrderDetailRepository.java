package com.wsu.ordermasterservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wsu.ordermasterservice.model.Server;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    // Custom query methods can be added here if required.
}
