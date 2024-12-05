package com.wsu.ordermasterservice.service;

import com.wsu.ordermasterservice.dto.FoodOrderDTO;
import com.wsu.ordermasterservice.model.FoodOrder;
import com.wsu.ordermasterservice.repository.FoodOrderRepository;
import com.wsu.ordermasterservice.utilities.CommonUtils;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class FoodOrderService {
    private final FoodOrderRepository foodOrderRepository;

    public Page<FoodOrder> getOrders(int page, int rpp, String sortField, String sortOrder) {
        Sort sort = CommonUtils.sort(sortField, sortOrder);
        Pageable pageable = PageRequest.of(page - 1, rpp, sort);
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
        if (!foodOrderRepository.existsById(id)) {
            throw new RuntimeException("Order not found");
    }
        foodOrderRepository.deleteById(id);
    }

    private FoodOrder convertToEntity(FoodOrderDTO foodOrderDTO) {
        FoodOrder.FoodOrderBuilder foodOrderBuilder = FoodOrder.builder()
                .orderId(foodOrderDTO.getOrderId())
                .server(foodOrderDTO.getServerId())
                .table(foodOrderDTO.getTableId())
                .timeOrdered(foodOrderDTO.getTimeOrdered())
                .timeCompleted(foodOrderDTO.getTimeCompleted())
                .status(foodOrderDTO.getStatus())
                .specialInstructions(foodOrderDTO.getSpecialInstructions())
                .date(foodOrderDTO.getDate());
    
        return foodOrderBuilder.build();
    }
    
    private FoodOrderDTO convertToDTO(FoodOrder foodOrder) {
        return foodOrder != null ? FoodOrderDTO.builder()
                .orderId(foodOrder.getOrderId())
                .serverId(foodOrder.getServer())
                .tableId(foodOrder.getTable())
                .timeOrdered(foodOrder.getTimeOrdered())
                .timeCompleted(foodOrder.getTimeCompleted())
                .status(foodOrder.getStatus())
                .date(foodOrder.getDate())
                .build() : null;
    }
}