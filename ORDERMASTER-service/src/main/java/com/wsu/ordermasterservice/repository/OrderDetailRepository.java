package com.wsu.ordermasterservice.repository;


@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    // Custom query methods can be added here if required.
}
