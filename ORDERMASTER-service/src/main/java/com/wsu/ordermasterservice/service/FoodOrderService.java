package com.wsu.ordermasterservice.service;

import 
import com.wsu.ordermasterservice.dto.FoodOrderDTO;
import com.wsu.ordermasterservice.model.FoodOrder;
import com.wsu.ordermasterservice.repository.FoodOrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class FoodOrderService {
    private final FoodOrderRepository foodOrderRepository;

    public Page<FoodOrder> getOrders(String search, int page, int rpp, String sortField, String sortOrder) {
        Pageable pageable = PageRequest.of(page - 1, rpp);
        return foodOrderRepository.findAll(pageable); // add custom search and sorting logic
    }

    public FoodOrderDTO addOrder(FoodOrderDTO foodOrderDTO) {
        FoodOrder foodOrder = convertToEntity(foodOrderDTO);
        foodOrder = foodOrderRepository.save(foodOrder);
        return convertToDTO(foodOrder);
    }

    public FoodOrderDTO updateOrder(Integer id, FoodOrderDTO foodOrderDTO) {
        Optional<FoodOrder> existingOrder = foodOrderRepository.findById(id);
        if (existingOrder.isPresent()) {
            FoodOrder foodOrder = convertToEntity(foodOrderDTO);
            foodOrder.setOrderId(id);
            return convertToDTO(foodOrderRepository.save(foodOrder));
        } else {
            throw new RuntimeException("Order not found"); 
        }
    }

    public void deleteOrder(Integer id) {
        foodOrderRepository.deleteById(id);
    }

    private FoodOrder convertToEntity(FoodOrderDTO foodOrderDTO) {
        // Convert DTO to entity (manually set fields or use a mapper like MapStruct)
        return new FoodOrder();
    }

    private FoodOrderDTO convertToDTO(FoodOrder foodOrder) {
        // Convert entity to DTO (manually set fields or use a mapper like MapStruct)
        return new FoodOrderDTO();
    }
}
