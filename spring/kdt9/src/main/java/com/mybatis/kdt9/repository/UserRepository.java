package com.mybatis.kdt9.repository;

import com.mybatis.kdt9.domain.User;
import com.mybatis.kdt9.domain.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    List<UserEntity> findByName(String name);

    Optional<UserEntity> findById(int id);

//    @Query("select * from user where name = :name")
//    UserEntity findNameByName(String name);
}
