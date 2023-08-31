import { useState } from 'react';
import './styles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
  });
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  return (
    <form>
      <input
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <input
        placeholder="price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>
      <button type='submit'>submit</button>
    </form>
  );
};

export default Form;
