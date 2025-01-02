export default function TodoInput ({ inputValue, setInputValue, handleAddTodo }) {
    
    // Handling form submit event
    function handleSubmit(e) {
        e.preventDefault();
        setInputValue('');
        handleAddTodo(inputValue);
    }

    return (
        <form className="header__form" onSubmit={handleSubmit}>
            <input className="header__form__input" type="text" placeholder="Enter todo..." onChange={({ target }) => setInputValue(target.value)} value={inputValue}/>
            <button type="submit">Add</button>
        </form>
    )
}