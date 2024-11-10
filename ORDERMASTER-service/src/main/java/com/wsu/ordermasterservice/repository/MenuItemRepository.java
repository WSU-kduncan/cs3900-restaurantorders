package com.wsu.ordermasterservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wsu.ordermasterservice.model.MenuItem;

public interface MenuItemRepository extends JpaRepository<MenuItem, Integer>
{

}
