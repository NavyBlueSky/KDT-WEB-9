FROM node:18
# 작업 디렉토리를 설정
WORKDIR /app
# 소스(파일) 추가
COPY . /app
# 쉘 스크립트 ( RUN : 이미지를 빌드할 때 )
RUN npm install
# 포트 매핑
EXPOSE 3000

# 실행 명령문 ( 컨테이너를 생성, 실행할 때 사용 )
# npm start
CMD ["npm", "start"]