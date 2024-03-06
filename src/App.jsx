import "./App.css";
import ProductList from "./components/ProductList";

function App() {
    return (
        <div className="max-w-screen-2xl mx-auto my-10">
            <h1 className="text-4xl text-center font-bold">React Infinite Scroll</h1>
            <ProductList />
        </div>
    );
}

export default App;
