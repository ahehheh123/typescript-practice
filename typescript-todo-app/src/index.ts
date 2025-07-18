// Todo 타입 정의
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// 예시로 하나 만들어보기
const sampleTodo: Todo = {
    id: 1,
    title: "타입스크립트 연습 시작하기",
    completed: false,
};

console.log(sampleTodo);
