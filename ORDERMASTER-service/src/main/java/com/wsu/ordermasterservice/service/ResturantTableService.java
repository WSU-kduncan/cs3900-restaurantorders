package com.wsu.ordermasterservice.service;

import com.wsu.ordermasterservice.dto.ResturantTableDTO;
import com.wsu.ordermasterservice.model.ResturantTable;
import com.wsu.ordermasterservice.repository.ResturantTableRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
//import static com.wsu.ordermasterservice.utilities.CommonUtils.sort;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class ResturantTableService {

    private final ResturantTableRepository resturantTableRepository;

    public List<ResturantTableDTO> getAllResturantTables() {
    try {
        return resturantTableRepository.findAll().stream().map(this::convertToDTO).toList();
    
    } catch (Exception e) {
        log.error("Failed to retrieve resturant tables. Exception:",e);
        throw new DatabaseErrorException("Failed to retrieve resturant tables.",  e);
}
    }

    public ResturantTableDTO getTableById(Integer tableId) {
        ResturantTable resturantTable = resturantTableRepository.findById(tableId).orElseThrow(() -> new RuntimeException("Resturant table not found"));
        return convertToDTO(resturantTable);
    }

    public ResturantTableDTO createTable(ResturantTableDTO resturantTableDTO) {
        ResturantTable resturantTable = convertToEntity(resturantTableDTO);
        resturantTable = resturantTableRepository.save(resturantTable);
        return convertToDTO(resturantTable);
    }

    public ResturantTableDTO updateTable(Integer tableId, ResturantTableDTO resturantTableDTO) {
        ResturantTable resturantTable = resturantTableRepository.findById(tableId).orElseThrow(() -> new RuntimeException("Resturant table not found"));
        resturantTable.setTableId(resturantTableDTO.getTableId());
        resturantTable.setCapacity(resturantTableDTO.getCapacity());
        return convertToDTO(resturantTableRepository.save(resturantTable));
    }

    public void deleteTable(Integer tableId) {
        if (!resturantTableRepository.existsById(tableId)) {
            throw new RuntimeException("Resturant table not found");
        }
        resturantTableRepository.deleteById(tableId);
    }

    private ResturantTableDTO convertToDTO(ResturantTable resturantTable) {
        return new ResturantTableDTO(
            resturantTable.getTableId(),
            resturantTable.getCapacity()
        );
    }
    private ResturantTable convertToEntity(ResturantTableDTO resturantTableDTO) {
        return new ResturantTable(
            resturantTableDTO.getTableId(),
            resturantTableDTO.getCapacity()
        );
    }
}
