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
    String itemName;

    public List<MenuItemDTO> getAllMenuItems() 
    {
        try 
        {
            return menuItemRepository.findAllByItemNameContaining(itemName).stream().map(this::convertToDTO).toList();
        }
        catch (Exception e) 
        {
            log.error("Failed to retrieve menu items. Exception:",e);
            throw new DatabaseErrorException("Failed to retrieve menu items.",  e);
        }
    }

    public MenuItemDTO getName(String menuItemName) 
    {
        try
        {
        MenuItem menuItem = menuItemRepository.findByItemName(menuItemName);
        return convertToDTO(menuItem);
        }
        catch(Exception e)
        {
            log.error("Failed to retrieve menu item. Exception:", e);
            throw new DatabaseErrorException("Failed to retrieve item.", e);
        }
    }

    private MenuItemDTO convertToDTO(MenuItem menuItems) 
    {
        return MenuItemDTO.builder().menuItemId(menuItems.getMenuItemId())
        .itemName(menuItems.getItemName()).unitPrice(menuItems.getUnitPrice()).build();
    }
}
