import logo from './logo.svg';
import './App.css';

function App() {
    // 수업
    const flag = true;
    let txt = '';

    if (flag) {
        txt = 'true 입니다.';
    } else {
        txt = 'false 입니다';
    }

    const styles = {
        backgroundColor: 'red',
    };

    // 실습2
    let name = '파비';
    let animal = '강아지';

    // 실습3
    let title = 'Hello World';

    //수업2 map
    const lists = ['k', 'd', 't', 'w', 'e', 'b'];

    //수업2 filter
    const animals = ['dog', 'cat', 'rabbit'];
    const newAnimals = animals.filter((value) => {
        return value.includes('a');
    });
    console.log(newAnimals);

    // &&연산자
    const result = true && 'Hello';
    console.log(result);

    //  ||연산자
    const defaultValue = 1000;
    const price = undefined;
    const dbPrice = 1000;
    const name2 = 'Martin';
    const greeting = name && `Hello, ${name2}!`;
    console.log(greeting);

    // 실습5
    const users = [
        { id: 1, name: 'John', age: 25, vip: true },
        { id: 2, name: 'Jane', age: 19, vip: false },
        { id: 3, name: 'Alice', age: 30, vip: true },
        { id: 4, name: 'Bob', age: 18, vip: false },
        { id: 5, name: 'Charlie', age: 35, vip: true },
    ];
    const prac5 = users.filter((users) => users.vip === true);
    const prac5l = prac5.map((value) => {
        return value.name;
    });

    const result2 = true && prac5l;
    console.log(result2);

    return (
        <>
            {/*수업 */}
            <div>
                <h1 style={{ backgroundColor: 'black', color: 'white' }}>Hello React</h1>
                <div style={styles}>리액트 시작</div>
                <div>{flag ? <h1>true입니다.</h1> : <h1>false입니다.</h1>}</div>
                <div>{txt}</div>
                {lists.map((value, indexx) => {
                    return (
                        <div key={indexx}>
                            <p>Hello {value}</p>
                        </div>
                    );
                })}
            </div>
            {/*실습1*/}
            <div>
                <div>이것은 div입니다.</div>
                <h3>이것은 div안에 있는 h3태그입니다.</h3>
            </div>
            <div>{3 + 5 == 8 ? <p>정답입니다.</p> : <p>오답입니다.</p>}</div>
            {/*실습2*/}
            <h2>제 반려 동물의 이름은 {name}입니다.</h2>
            <h2>
                <u>{name}</u>는 <u>{animal}</u>입니다.
            </h2>
            {/*실습3*/}
            <div>
                <h1 class="test"> {title} </h1>
                <div class="input">
                    아이디 : <input></input>
                </div>
                <br />
                <div class="input">
                    비밀번호 : <input></input>
                </div>
            </div>
            {/*실습4*/}
            <div class="wrap">
                <div class="red"></div>
                <div class="orange"></div>
                <div class="yellow"></div>
                <div class="green"></div>
                <div class="blue"></div>
                <div class="navy"></div>
                <div class="purple"></div>
            </div>
        </>
    );
}

export default App;
