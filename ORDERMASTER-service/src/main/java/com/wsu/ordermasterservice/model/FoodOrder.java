package com.wsu.ordermasterservice.model;

import lombok.Data;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@Table(name = "food_orders")
public class FoodOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderId;

    @Column(name = "server_id")
    private Integer server;

    @Column(name = "table_id")
    private Integer table;

    @Column(name = "date")
    private Date date;

    @Column(name = "time_ordered")
    private Date timeOrdered;
    @Column(name = "time_completed")
    private Date timeCompleted;
    @Column(name = "status")
    private String status;
    @Column(name = "special_instructions")
    private String specialInstructions;
}
