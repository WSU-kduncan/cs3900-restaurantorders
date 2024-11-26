package com.wsu.ordermasterservice.controller;

import com.wsu.ordermasterservice.model.OrderDetail;
import com.wsu.ordermasterservice.service.OrderDetailService;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/orderDetails")
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping
    public ResponseEntity<List<OrderDetail>> getAllOrderDetails() {
        List<OrderDetail> orderDetails = orderDetailService.getAllOrderDetails();
        return new ResponseEntity<>(orderDetails, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<OrderDetail> addOrderDetail(@RequestBody OrderDetail orderDetail) {
        OrderDetail newOrderDetail = orderDetailService.addOrderDetail(orderDetail);
        return new ResponseEntity<>(newOrderDetail, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrderDetail> updateOrderDetail(@PathVariable Long id, @RequestBody OrderDetail orderDetailDetails) {
        OrderDetail updatedOrderDetail = orderDetailService.updateOrderDetail(id, orderDetailDetails);
        return new ResponseEntity<>(updatedOrderDetail, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderDetail(@PathVariable Long id) {
        orderDetailService.deleteOrderDetail(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteAllOrderDetails() {
        orderDetailService.deleteAllOrderDetails();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
