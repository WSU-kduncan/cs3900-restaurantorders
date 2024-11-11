package com.wsu.ordermasterservice.service;

import com.wsu.ordermasterservice.model.OrderDetail;
import com.wsu.ordermasterservice.repository.OrderDetailRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailService {

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    public List<OrderDetail> getAllOrderDetails() {
        return orderDetailRepository.findAll();
    }

    public OrderDetail addOrderDetail(OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

    public OrderDetail updateOrderDetail(Long id, OrderDetail orderDetailDetails) {
        Optional<OrderDetail> existingOrderDetail = orderDetailRepository.findById(id);
        if (existingOrderDetail.isPresent()) {
            OrderDetail orderDetail = existingOrderDetail.get();
            orderDetail.setOrderId(orderDetailDetails.getOrderId());
            orderDetail.setMenuItemId(orderDetailDetails.getMenuItemId());
            orderDetail.setQuantity(orderDetailDetails.getQuantity());
            orderDetail.setPrice(orderDetailDetails.getPrice());
            // Update other fields as necessary.
            return orderDetailRepository.save(orderDetail);
        } else {
            throw new RuntimeException("OrderDetail not found");
        }
    }

    public void deleteOrderDetail(Long id) {
        orderDetailRepository.deleteById(id);
    }

    public void deleteAllOrderDetails() {
        orderDetailRepository.deleteAll();
    }
}
