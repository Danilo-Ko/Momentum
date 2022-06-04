const quotes = [{
    quote: "성공은 확장이고 실패는 확정이다!",
    author: "* Egoing *",
},
{
    quote: "코딩을 잘하려면 엉덩이가 무거워야 한다!",
    author: "* 무명 *",
},
{
    quote: "좋은 코딩을 하려면 중복을 제거하라!",
    author: "* Egoing *",
},
{
    quote: "일 못하는 사람의 특징: 1. 시간이 없다고 항상 투덜거림",
    author: "* 고영성 *",
},
{
    quote: "일 못하는 사람의 특징: 2. 일이 계획대로 된다고 믿고 있음",
    author: "* 고영성 *",
},
{
    quote: "일 못하는 사람의 특징: 3. 자신은 괜찮은데 주변 사람이 부족하다고 생각함.",
    author: "* 고영성 *",
},
{
    quote: "일 못하는 사람의 특징: 4. 함께 일하는 사람에 대한 배려가 없음.",
    author: "* 고영성 *",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random () * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;