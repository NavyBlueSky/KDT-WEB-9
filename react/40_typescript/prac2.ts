interface Game {
    title: String;
    price: Number;
    desc?: String;
    category: String;
    platform: String;
}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    //desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지',
    category: '액션',
    platform: '모바일',
};
