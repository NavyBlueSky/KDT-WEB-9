package com.example.jdbc.jdbcExample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserCommandRun implements CommandLineRunner {

    @Autowired
    private  UserJdbcRepository user;

    @Override
    public void run(String... args) throws Exception {
        user.insert(new Users(1, "김민재", "대전광역시 서구"));
        user.insert(new Users(2, "김민재", "고양시 일산동구"));
        user.insert(new Users(3, "김민재", "성남시 분당구"));

        user.deleteId(1);

        System.out.println(user.findId(3));

    }
}
