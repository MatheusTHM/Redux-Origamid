import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilters, selectUniqueColors } from './store/products';

export const Filter = () => {
  const colors = useSelector(selectUniqueColors);
  const [minPrice, setMinPrice] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');
  const [selectedColors, setSelectedColors] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeFilters({ name: 'colors', value: selectedColors }));
  }, [selectedColors, dispatch]);

  React.useEffect(() => {
    dispatch(
      changeFilters({
        name: 'prices',
        value: {
          min: Number(minPrice),
          max: Number(maxPrice),
        },
      }),
    );
  }, [minPrice, maxPrice, dispatch]);

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors([...selectedColors, target.value]);
    } else {
      setSelectedColors(
        selectedColors.filter((color) => color !== target.value),
      );
    }
  }

  function handleChecked(color) {
    return selectedColors.includes(color);
  }

  return (
    <div>
      <input
        type="number"
        value={minPrice}
        placeholder="Min"
        onChange={({ target }) => setMinPrice(target.value)}
      />
      <input
        type="number"
        placeholder="Max"
        value={maxPrice}
        onChange={({ target }) => setMaxPrice(target.value)}
      />
      {colors.map((color) => {
        return (
          <label key={color}>
            <input
              type="checkbox"
              value={color}
              onChange={handleChange}
              checked={handleChecked(color)}
            />
            {color}
          </label>
        );
      })}
    </div>
  );
};
