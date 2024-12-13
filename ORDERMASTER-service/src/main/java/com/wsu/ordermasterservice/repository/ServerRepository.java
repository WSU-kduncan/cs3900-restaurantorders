package com.wsu.ordermasterservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wsu.ordermasterservice.model.Server;

@Repository
public interface ServerRepository extends JpaRepository<Server, Integer> {

}
