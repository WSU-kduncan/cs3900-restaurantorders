package com.wsu.ordermasterservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wsu.ordermasterservice.model.Server;

public interface ServerRepository extends JpaRepository<Server, Integer> {

}
