// import "./App.css";
import TodoForm from "./components/todo-form";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  // 전체화면 색깔주기
  // 가운데 팝업 박스 만들기
  // 상단에 밝기모드 및 템 만들기
  // 중간에 리스트만들기
  // 하단에 입력 폼 만들기
  return (
    <DarkModeProvider>
      <div className="flex justify-center h-screen items-center">
        <TodoForm />
      </div>
    </DarkModeProvider>
  );
}

export default App;
