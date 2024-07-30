import styles from './FoodInput.module.css';

const FoodInput = (props) => {
    return <input type='text'
        placeholder='Enter Food item'
        className={styles.foodInput}
        onKeyDown={props.handleOnChange}
    ></input>
}

export default FoodInput;