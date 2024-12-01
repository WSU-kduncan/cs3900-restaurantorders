package com.wsu.ordermasterservice.service;

import com.wsu.ordermasterservice.dto.OrderDetailDTO;

import com.wsu.ordermasterservice.model.OrderDetail;
import com.wsu.ordermasterservice.repository.OrderDetailRepository;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderDetailService {

    private final OrderDetailRepository orderDetailRepository;

    public List<OrderDetail> getAllOrderDetails() {
        return orderDetailRepository.findAll();
    }

    public OrderDetailDTO addOrderDetail(OrderDetailDTO orderDetailDTO) {
        OrderDetail orderDetail = convertToEntity(orderDetailDTO);
        orderDetail = orderDetailRepository.save(orderDetail);
        return convertToDTO(orderDetail);
    }

    public OrderDetail updateOrderDetail(Long id, OrderDetail orderDetailDetails) {
        Optional<OrderDetail> existingOrderDetail = orderDetailRepository.findById(id);
        if (existingOrderDetail.isPresent()) {
            OrderDetail orderDetail = existingOrderDetail.get();
            orderDetail.setOrderId(id);
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

    private OrderDetail convertToEntity(OrderDetailDTO orderDetailDTO) {
        return OrderDetail.builder()
                .orderId(orderDetailDTO.getOrderId())
                .menuItemId(orderDetailDTO.getMenuItemId())
                .quantity(orderDetailDTO.getQuantity())
                .price(orderDetailDTO.getPrice())
                .build();
    }

    private OrderDetailDTO convertToDTO(OrderDetail orderDetail) {
        return orderDetail != null ? OrderDetailDTO.builder()
                .orderId(orderDetail.getOrderId())
                .menuItemId(orderDetail.getMenuItemId())
                .quantity(orderDetail.getQuantity())
                .price(orderDetail.getPrice())
                .build() : null;
    }
}