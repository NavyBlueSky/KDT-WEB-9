package com.mybatis.kdt9.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.usertype.UserType;

@Entity // db 테이블에 대등되는 하나의 클래스
@Table(name="user")
@Getter
@Setter
public class UserEntity {
    //id, name, nickname
    @Id // pk
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // auto_increment 로 설정해라
    private int id;
    @Column(name = "name", nullable = false, length = 20)
    private String name;
    @Column(columnDefinition = "TEXT")
    private String nickname; // 255

    //Enum 타입을 만들 수 있다.
//    @Column
//    @Enumerated(EnumType.STRING)
//    private UserType type;
//
//    public enum UserType {
//        STUDENT, TEACHER
//    }
}
