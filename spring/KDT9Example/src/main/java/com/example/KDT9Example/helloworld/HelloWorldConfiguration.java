package com.example.KDT9Example.helloworld;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

//record: getter, setter, 생성자 등을 자동으로 생성
record Person(String name, int age) {}

record Address(String address, int postcode) {}

record Infomation(String name, int age, Address address) {}

//Configuration: 빈(Bean) 정의를 포함하는 클래스
@Configuration
public class HelloWorldConfiguration {

    @Bean
    public String name() {
        return "lyle";
    }

    @Bean
    public int age() {
        return 27;
    }

    @Bean
    public Person person() {
        return new Person("kyle", 21);
    }

    @Bean
    public Person person2() {
        return new Person( name(), age());
    }

    @Bean(name = "myAddress")
    public Address address1() {
        return new Address("Ilsan", 10321);
    }

    @Bean
    @Primary
    public Infomation info(String name, int age, @Qualifier("address3Qualifier") Address myAddress) {
        return new Infomation(name, age, myAddress);
    }

    @Bean
    @Primary
    public Address address2() {
        return new Address("Ulsan", 12934);
    }
    @Bean
    @Qualifier("address3Qualifier")
    public Address address3() {
        return new Address("Suwon", 47383);
    }

    @Bean
    public Infomation info2(String name, int age, @Qualifier("address3Qualifier") Address myAddress) {
        return new Infomation(name, age, myAddress);
    }
}
