package com.example.KDT9Example.controller;

import com.example.KDT9Example.dto.UserDTO;
import com.example.KDT9Example.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
//@RestController
public class MainController {

    @GetMapping("/")
    public String getMain() {
        return "request";
    }
    //////////////////////////post///////////////////////////////////

    @GetMapping("/get/response1")
    // ?key=value
    // /get/response1?name=abc
    // 기본값으로 required=true를 갖기 때문에 ?name= 을 필수로 보내줘야 한다.
    public String getResponse1(@RequestParam(value = "name") String n, Model model) {
        model.addAttribute("name", n);
        return "response";
    }

    @GetMapping("/get/response2")
    public String getResponse2(@RequestParam(value = "name", required = false) String n, Model model) {
        model.addAttribute("name", n);
        return "response";
    }

    @GetMapping("/get/response3/{name}/{age}")
    public String getResponse3(@PathVariable String name, @PathVariable("age") String abc, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    @GetMapping({"/get/response4/{name}", "/get/response4/{name}/{age}"})
    // @PathVaiable 도 @ResquestParam과 동일하게 required의 기본값이 True
    public String getResponse4(@PathVariable String name, @PathVariable(required = false) String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }

    @GetMapping({"/introduce/{name}", "/introduce/{name}/{age}"})
    // @PathVaiable 도 @ResquestParam과 동일하게 required의 기본값이 True
    public String getPracIn(@PathVariable String name, @PathVariable(required = false) String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }

    //////////////////////////post///////////////////////////////////
    @PostMapping("/post/response1")
    public String postResponse1(@RequestParam String name, Model model) {
        model.addAttribute("name", name);
        //RequestBody: 전달 받은 body 데이터를 json형태의 객체로 만들어준다.
        return "response";
    }

    @PostMapping("/post/response2")
    public String postResponse2(@RequestParam(required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "response";
    }

    @PostMapping("/post/response3")
    @ResponseBody
    //ResponseBody: response데이터를 전달한다.// res.send
    public String postResponse3(@RequestParam(required = false) String name1, Model model) {
        model.addAttribute("name", name1);
        return "response";
    }


    ////실습/////////////////////////
    @PostMapping("/postForm")
//    @ResponseBody
    public String postPrac4(@RequestParam(required = false) String name, String gender, String date, String hobby, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("date", date);
        model.addAttribute("hobby", hobby);

        return "prac4response";
    }

    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoResponse1(@ModelAttribute UserDTO userDTO) {
        //DTO앞에 어노테이션을 붙이지 않았으면 -> @ModelAttribute가 자동으로 실행된다.
        // 아무것도 넣지 않던 = @ModelAttribute 동일
        //@ModelAttribute: html 폼 데이터를 컨트롤러로 전달할 떄 객체에 매핑해주는 친구
        //매핑 -> 같은 이름끼리 set 함수를 실행한다.
        //-> 프론트에서 {name, abc}
        //@RequestBody 사용 가능?
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }
    ///////////////실습/////////////////
    @GetMapping("/dto/response111")
    @ResponseBody
    public String dtoAPI1(UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 :  " + userDTO.getAge();
        return msg;
    }
    @GetMapping("/dto/response222")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 :  " + userDTO.getAge();
        return msg;
    }
    @GetMapping("/dto/response333")
    @ResponseBody
    public String dtoAPI3(UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 :  " + userDTO.getAge();
        return msg;
    }
    ///////////////실습끝/////////////////

    @GetMapping("/dto/response11")
    @ResponseBody
    public String dtoResponse11(@RequestBody UserDTO userDTO) {
        // get방식으로 전달하고 @RequestBody로 받으면 오류
        // RequestBody: 요청의 본문에 있는 데이터(body)
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }
    
    //일반 폼전송 - DTO
    // 1) 아무것도 적지 않고 DTO로 받으면 ㅇㅋ
    // 2) @ModelAttribute DTO로 받으면 ㅇㅋ
    // 3) @RequestBOdy DTO로 받으면 ㄴㄴ오류

    // @Requestbody는 요청의 본문에 있는 데이터를(body)를 받아서 객체에 매핑 단, 전달받은 요청의 데이터형식
    //json 또는 xml일때만 실행이 가능
    //일반폼 전송 -> www-x-form-urlencoded

    @GetMapping("/vo/response1")
    @ResponseBody
    public String voResponse1(@ModelAttribute UserVO userVO) {
        //MdoelAttribute를 이용하면 객체의 set함수를 이용해 값을 넣어준다.
        String msg = userVO.getName() + " " + userVO.getAge();
        return msg;
    }

    @PostMapping("/vo/response2")
    @ResponseBody
    public String voResponse2(UserVO userVO) {
        String msg = userVO.getName() + " " + userVO.getAge();
        return msg;
    }
///////////////실습/////////////////
    @GetMapping("/vo/response111")
    @ResponseBody
    public String voAPI1(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 :  " + userVO.getAge();
        return msg;
    }

    @GetMapping("/vo/response222")
    @ResponseBody
    public String voAPI2(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 :  " + userVO.getAge();
        return msg;
    }

    @GetMapping("/vo/response333")
    @ResponseBody
    public String voAPI3(UserVO userVO) {
        String msg = "이름 : " + userVO.getName() + "\n나이 :  " + userVO.getAge();
        return msg;
    }

    ///////////////실습끝/////////////////

    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosResponse1(@RequestParam String name, @RequestParam String age) {
        //axios get 전송일 때, @RequestParam으로 값을 전달받을 수 있다.
        String msg = "이름: " + name + " , 나이: " + age;
        return msg;
    }

    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosResponse2(UserDTO userDTO) {
        //axios get 전송일 때, @ModelAttribute으로 값을 전달받을 수 있다.(=set 함수가 있는 객체)
        String msg = "이름: " + userDTO.getName() + " , 나이: " + userDTO.getAge();
        return msg;
    }

    //ModelAttribute 와 @RequestParam의 특징
    // 일반폼 전송 -> 파라미터 형태로 들어와요.
    // json으로 값을 보내면 파라미터x 데이터o
    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosResponse3(@RequestParam String name, @RequestParam String age) {
        // axios post는 @RequestParam으로 못 받는다.
        String msg = "이름: " + name + " , 나이: " + age;
        return msg;
    }
    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosResponse4(UserDTO userDTO) {
        String msg = "이름: " + userDTO.getName() + " , 나이: " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosResponse5(@RequestBody UserDTO userDTO) {
        String msg = "이름: " + userDTO.getName() + " , 나이: " + userDTO.getAge();
        return msg;
    }

    //////////
    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosVoResponse1(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름: " + name + " , \n나이: " + age;
        return msg;
    }
    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosVoResponse2( UserVO userVO) {
        String msg = "이름: " + userVO.getName() + " , \n나이: " + userVO.getAge();
        return msg;
    }
    @PostMapping("/axios/vo/response3")
    @ResponseBody
    public String axiosVoResponse3(@RequestParam(value="name") String name, @RequestParam(value="age") String age) {
        String msg = "이름: " + name + " , \n나이: " + age;
        return msg;
    }
    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosVoResponse4( UserVO userVO) {
        String msg = "이름: " + userVO.getName() + " , \n나이: " + userVO.getAge();
        return msg;
    }
    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosVoResponse5(@RequestBody UserVO userVO) {
        //ModelAttribute는 setter함수를 실행해 값을 넣어주는 친구
        //RequestBody는 setter함수가 아닌 각가의 필드에 직접적으로 값을 주입하면서 매핑
        String msg = "이름: " + userVO.getName() + " , \n나이: " + userVO.getAge();
        return msg;
    }
//////////////////////실습/////////////////////////

    @PostMapping("/axios/vo/prac")
    @ResponseBody
    public String voPrac(@RequestBody UserVO userVO) {
        String msg = userVO.getName();
        return msg;
    }
}
