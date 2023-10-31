package com.example.KDT9Example.dto;

import lombok.Getter;
import lombok.Setter;

public class UserDTO {
    private String name;
    //getter와 setter를 만들것임. generate => getter, setter
    //lombok (코드 다이어터)
    public String getName() { return name; }

    public void setName(String name) { this.name = name; }



    //    @Getter
//    @Setter
    private String age;


    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

}
