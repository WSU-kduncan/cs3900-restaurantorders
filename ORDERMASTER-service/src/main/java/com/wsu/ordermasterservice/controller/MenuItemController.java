package com.wsu.ordermasterservice.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wsu.ordermasterservice.dto.MenuItemDTO;
import com.wsu.ordermasterservice.service.MenuItemService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/menuitems")
public class MenuItemController
{
    private final MenuItemService menuItemService;

    @GetMapping
    public ResponseEntity<List<MenuItemDTO>> getAllMenuItems()
    {
        return ResponseEntity.ok(menuItemService.getAllMenuItems());
    }

    @GetMapping("/{menuName}")
    public ResponseEntity<MenuItemDTO> getSItemByName(@PathVariable Integer item_name) {
        return ResponseEntity.ok(menuItemService.getMenuItemByName(item_name));
    }
}
