package com.wsu.ordermasterservice.repository;

import com.wsu.ordermasterservice.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    // Custom query methods can be added here if required.
}
