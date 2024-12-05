package com.wsu.ordermasterservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wsu.ordermasterservice.model.MenuItem;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Integer>
{
    MenuItem findByItemName(String itemName);
    List<MenuItem> findAllByItemNameContaining(String itemName);
}
