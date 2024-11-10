package com.wsu.ordermasterservice.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wsu.ordermasterservice.dto.MenuItemDTO;
import com.wsu.ordermasterservice.model.MenuItem;
import com.wsu.ordermasterservice.repository.MenuItemRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class MenuItemService 
{
    private final MenuItemRepository menuItemRepository;

    public List<MenuItemDTO> getAllMenuItems() 
    {
        try 
        {
            return menuItemRepository.findAll().stream().map(this::convertToDTO).toList();
        }
        catch (Exception e) 
        {
            log.error("Failed to retrieve menu items. Exception:",e);
            throw new DatabaseErrorException("Failed to retrieve menu items.",  e);
        }
    }

    public MenuItemDTO getMenuItemById(Integer menuItemId) 
    {
        MenuItem menuItem = menuItemRepository.findById(menuItemId).orElseThrow(() -> new RuntimeException("Server not found"));
        return convertToDTO(menuItem);
    }

    private MenuItemDTO convertToDTO(MenuItem menuItem) 
    {
        return new MenuItemDTO
        (
            menuItem.getMenuItemId(),
            menuItem.getItemName(),
            menuItem.getUnitPrice()
        );
    }
    private MenuItem convertToEntity(MenuItemDTO menuItemDTO) {
        return new MenuItem(
                menuItemDTO.getMenuItemId(),
                menuItemDTO.getItemName(),
                menuItemDTO.getUnitPrice()
        );
    }
}
