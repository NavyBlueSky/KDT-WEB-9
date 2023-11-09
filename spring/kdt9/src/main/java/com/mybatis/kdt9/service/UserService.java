package com.mybatis.kdt9.service;

import com.mybatis.kdt9.domain.User;
import com.mybatis.kdt9.domain.UserEntity;
import com.mybatis.kdt9.dto.UserDTO;
import com.mybatis.kdt9.dto.UserDTOBuilder;
import com.mybatis.kdt9.mapper.UserMapper;
import com.mybatis.kdt9.repository.UserRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    // mapper를 실행하고 그에 대한 결과겂을 dto에 담아서 controller로 return

    @Autowired
    UserMapper userMapper;

    @Autowired
    UserRepository userRepository;

    public String searchId(int id) {
        // Optional: null일수도 있는 객체를 감싸는 wrapper 객체
        Optional<UserEntity> result = userRepository.findById(id);
        if(result.isPresent()){
            System.out.println(result.get().getName());
        } else {
            System.out.println("해당하는 친구 없음");
        }
        // optional 함수
        // isPresent(), isEmpty(), get() 등등
        // isPresent(): 객체의 여부를 boolean으로 반환
        // isEmpty(): isPresent()의 반대
        // get(): 옵셔널 내부의 객체를 반환

        return "";
    }


    public String searchUser(String name) {
        // repository 를 통해서 어떤 메소드를 실행하고 그에 대한 결과를 return
        List<UserEntity> result = userRepository.findByName(name);
        // findBy 컬럼명
        // findBy 컬럼명 and 컬럼명 findByNameAndNickName
        for (UserEntity user : result) {
            System.out.println(user.getId() + user.getNickname());
        }
        return "";
    }



    public List<UserDTO> getUserList(){
        ////////////////////jpa////////////////////
        List<UserEntity> result = userRepository.findAll(); // 전체 검색 select * from user;
        List<UserDTO> users = new ArrayList<>();
        for (UserEntity user : result) {
            UserDTO userDTO = UserDTO.builder()
                    .id(user.getId())
                    .name(user.getName())
                    .nickname(user.getNickname())
                    .build();
            users.add(userDTO);
        }


        //////////////////////////////mybatis///////////////////////////////
//        List<User> result = userMapper.retrieveAll();
//        List<UserDTO> users = new ArrayList<UserDTO>();
//
//        for( int i = 0; i < result.size(); i++) {
//            User u = result.get(i);
//
////            UserDTO user = new UserDTO();
////            user.setId(u.getId());
////            user.setName(u.getName());
////            user.setNickname(u.getNickname());
////            user.setNo(i + 1);
////            users.add(user);
//            UserDTO user = UserDTO.builder()
//                    .id(u.getId())
//                    .name(u.getName())
//                    .nickname(u.getNickname())
//                    .no(i+1)
//                    .build();
//            users.add(user);
//
//
//            // 검색된 u 하나씩 데이터를 userDTO로 만들고
//            // 그걸 users에 담아서 return 해야겟죠?
//
////            UserDTOBuilder userDTOBuilder = UserDTOBuilder.builder()
////                    .id(u.getId())
////                    .name(u.getName())
////                    .build();
//        }

        return users;
    }


    public void insertUser(String name, String nickname) {
        User user = new User();
        user.setName(name);
        user.setNickname(nickname);

        userMapper.insertUser(user);
    }

    public void insertUserE(String name, String nickname) {
        UserEntity userEntity = new UserEntity();
        userEntity.setName(name);
        userEntity.setNickname(nickname);

        userRepository.insertUserE(userEntity);
    }
}
