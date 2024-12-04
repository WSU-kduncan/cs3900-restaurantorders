package com.wsu.ordermasterservice.service;

import com.wsu.ordermasterservice.dto.RestaurantTableDTO;
import com.wsu.ordermasterservice.exceptions.DatabaseErrorException;
import com.wsu.ordermasterservice.model.RestaurantTable;
import com.wsu.ordermasterservice.repository.RestaurantTableRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
//import static com.wsu.ordermasterservice.utilities.CommonUtils.sort;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class RestaurantTableService {

    private final RestaurantTableRepository restaurantTableRepository;

    public List<RestaurantTableDTO> getAllRestaurantTables() {
    try {
        return restaurantTableRepository.findAll().stream().map(this::convertToDTO).toList();
    
    } catch (Exception e) {
        log.error("Failed to retrieve restaurant tables. Exception:",e);
        throw new DatabaseErrorException("Failed to retrieve restaurant tables.",  e);
}
    }

    public RestaurantTableDTO getRestaurantTableById(Integer tableId) {
        RestaurantTable resturantTable = restaurantTableRepository.findById(tableId).orElseThrow(() -> new RuntimeException("Restaurant table not found"));
        return convertToDTO(resturantTable);
    }

    public RestaurantTableDTO createRestaurantTable(RestaurantTableDTO resturantTableDTO) {
        RestaurantTable restaurantTable = convertToEntity(resturantTableDTO);
        restaurantTable = restaurantTableRepository.save(restaurantTable);
        return convertToDTO(restaurantTable);
    }

    public RestaurantTableDTO updateRestaurantTable(Integer tableId, RestaurantTableDTO restaurantTableDTO) {
        RestaurantTable restaurantTable = restaurantTableRepository.findById(tableId).orElseThrow(() -> new RuntimeException("Restaurant table not found"));
        restaurantTable.setTableId(tableId);
        restaurantTable.setCapacity(restaurantTableDTO.getCapacity());
        return convertToDTO(restaurantTableRepository.save(restaurantTable));
    }

    public void deleteRestaurantTable(Integer tableId) {
        if (!restaurantTableRepository.existsById(tableId)) {
            throw new RuntimeException("Restaurant table not found");
        }
        restaurantTableRepository.deleteById(tableId);
    }

    private RestaurantTableDTO convertToDTO(RestaurantTable restaurantTable) {
        return new RestaurantTableDTO(
            restaurantTable.getTableId(),
            restaurantTable.getCapacity()
        );
    }
    private RestaurantTable convertToEntity(RestaurantTableDTO restaurantTableDTO) {
        return new RestaurantTable(
            restaurantTableDTO.getTableId(),
            restaurantTableDTO.getCapacity()
        );
    }
}
