package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

class Hello {
    private int age;
    public Hello(int age) {
        this.age = age;
    }
    public int getAge() {
        return age;
    }
}
@Controller  // 정보를 받아서 뷰에게 전달
public class HelloController {

    @GetMapping("/hi") // router (get 요청)
    public String getHi(Model model) {  // Model model: 컨트롤러 클래스안의 메서드가 파라미터로 받을 수 있는 객체
        Hello hello = new Hello(25);
        List<String> names = Arrays.asList("kim", "lee", "hong", "park");
        model.addAttribute("msg", "hi~~~~");
        model.addAttribute("hello", "Spring World");
        model.addAttribute("uText", "<strong>Hello<strong/>");
        model.addAttribute("value", "이름을 입력하세요");
        model.addAttribute("with", "hello");
        model.addAttribute("link", "hi");
//        model.addAttribute("img", "staticsample.jpg");
        model.addAttribute("userRole", "admin");
        model.addAttribute("isAdmin", "false");
        model.addAttribute("names", names);
        model.addAttribute("classHello", hello);



        //${..} : 변수 표현식 //
        //@{..} : URL링크 표현식 @{/hi}
        //*{..} : 선택변수 표현식 *{msg} 단, th : object

        //컨트롤러 클래스에서 private String msg = "hi";
        //model.addAtribut("Msg",new HelloController());
        //테믈릿에서 <div th : object = ${Msg}><h1 th : text = {msg}></h1>
        return "hi"; //파일이름

    }
}


