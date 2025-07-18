interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const todos: Todo[] = [
    { id: 1, title: '타입스크립트 연습 시작하기', completed: false },
    { id: 2, title: 'GitHub에 코드 올리기', completed: true },
    { id: 3, title: '함수로 기능 분리', completed: false },
];

// ✅ 함수 정의: Todo 배열을 받아 출력
function printTodos(todoList: Todo[]): void {
    todoList.forEach((todo) => {
        const status = todo.completed ? '✔' : ' ';
        console.log(`[${status}] ${todo.id}: ${todo.title}`);
    });
}

// ✅ 함수 호출
printTodos(todos);

// ✅ 새로운 Todo 추가 함수
function addTodo(todoList: Todo[], title: string): void {
    const newTodo: Todo = {
        id: todoList.length + 1,
        title,
        completed: false,
    };

    todoList.push(newTodo);
}
// ✅ 새로운 할 일 추가해보기
addTodo(todos, 'TypeScript로 함수 만들기');

// ✅ 다시 출력해보기
printTodos(todos);
